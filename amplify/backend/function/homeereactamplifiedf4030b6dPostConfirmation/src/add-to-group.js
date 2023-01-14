const aws = require('aws-sdk');

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18',
});

const ADMIN_GROUP = process.env.ADMIN_GROUP || [];

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async event => {
  const groupParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
  };
  const addUserParams = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();

  //check if should add users to admin group too:
  if (ADMIN_GROUP.includes(event.request.userAttributes.email)){
    const adminGroupParams = {
      GroupName: "admin",
      UserPoolId: event.userPoolId,
    };
    const addAdminUserParams = {
      GroupName: "admin",
      UserPoolId: event.userPoolId,
      Username: event.userName,
    };
    try {
      await cognitoidentityserviceprovider.getGroup(adminGroupParams).promise();
      await cognitoidentityserviceprovider.adminAddUserToGroup(addAdminUserParams).promise();
    } catch (e) {
        console.log("Failed to add user to admin group");
    }
  }

  return event;
};
