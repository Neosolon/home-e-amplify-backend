/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomBudgetCategory = /* GraphQL */ `
  mutation CreateCustomBudgetCategory(
    $input: CreateCustomBudgetCategoryInput!
    $condition: ModelCustomBudgetCategoryConditionInput
  ) {
    createCustomBudgetCategory(input: $input, condition: $condition) {
      id
      budgetCategory
      budgetType
      amount
      budgetID
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomBudgetCategory = /* GraphQL */ `
  mutation UpdateCustomBudgetCategory(
    $input: UpdateCustomBudgetCategoryInput!
    $condition: ModelCustomBudgetCategoryConditionInput
  ) {
    updateCustomBudgetCategory(input: $input, condition: $condition) {
      id
      budgetCategory
      budgetType
      amount
      budgetID
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomBudgetCategory = /* GraphQL */ `
  mutation DeleteCustomBudgetCategory(
    $input: DeleteCustomBudgetCategoryInput!
    $condition: ModelCustomBudgetCategoryConditionInput
  ) {
    deleteCustomBudgetCategory(input: $input, condition: $condition) {
      id
      budgetCategory
      budgetType
      amount
      budgetID
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      description
      birthday
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      description
      birthday
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      description
      birthday
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBudget = /* GraphQL */ `
  mutation CreateBudget(
    $input: CreateBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    createBudget(input: $input, condition: $condition) {
      id
      budgets {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      CustomBudgetCategories {
        items {
          id
          budgetCategory
          budgetType
          amount
          budgetID
          createdAt
          updatedAt
        }
        nextToken
      }
      Expenses {
        items {
          id
          amount
          date
          budgetID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      BudgetTypeRecommendedSpending {
        id
        budgetType {
          AutoAndTransport
          BillsAndUtilities
          Entertainment
          FeesAndCharges
          WealthPlanning
          Health
          Fitness
          Income
          Misc
          PersonalCare
          Pets
          Uncategorized
          Travel
          Shopping
        }
        recommendedAllocatedSpending
        createdAt
        updatedAt
        owner
      }
      BudgetName
      createdAt
      updatedAt
      budgetBudgetTypeRecommendedSpendingId
      owner
    }
  }
`;
export const updateBudget = /* GraphQL */ `
  mutation UpdateBudget(
    $input: UpdateBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    updateBudget(input: $input, condition: $condition) {
      id
      budgets {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      CustomBudgetCategories {
        items {
          id
          budgetCategory
          budgetType
          amount
          budgetID
          createdAt
          updatedAt
        }
        nextToken
      }
      Expenses {
        items {
          id
          amount
          date
          budgetID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      BudgetTypeRecommendedSpending {
        id
        budgetType {
          AutoAndTransport
          BillsAndUtilities
          Entertainment
          FeesAndCharges
          WealthPlanning
          Health
          Fitness
          Income
          Misc
          PersonalCare
          Pets
          Uncategorized
          Travel
          Shopping
        }
        recommendedAllocatedSpending
        createdAt
        updatedAt
        owner
      }
      BudgetName
      createdAt
      updatedAt
      budgetBudgetTypeRecommendedSpendingId
      owner
    }
  }
`;
export const deleteBudget = /* GraphQL */ `
  mutation DeleteBudget(
    $input: DeleteBudgetInput!
    $condition: ModelBudgetConditionInput
  ) {
    deleteBudget(input: $input, condition: $condition) {
      id
      budgets {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      CustomBudgetCategories {
        items {
          id
          budgetCategory
          budgetType
          amount
          budgetID
          createdAt
          updatedAt
        }
        nextToken
      }
      Expenses {
        items {
          id
          amount
          date
          budgetID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      BudgetTypeRecommendedSpending {
        id
        budgetType {
          AutoAndTransport
          BillsAndUtilities
          Entertainment
          FeesAndCharges
          WealthPlanning
          Health
          Fitness
          Income
          Misc
          PersonalCare
          Pets
          Uncategorized
          Travel
          Shopping
        }
        recommendedAllocatedSpending
        createdAt
        updatedAt
        owner
      }
      BudgetName
      createdAt
      updatedAt
      budgetBudgetTypeRecommendedSpendingId
      owner
    }
  }
`;
export const createBudgetTypeRecommendedSpending = /* GraphQL */ `
  mutation CreateBudgetTypeRecommendedSpending(
    $input: CreateBudgetTypeRecommendedSpendingInput!
    $condition: ModelBudgetTypeRecommendedSpendingConditionInput
  ) {
    createBudgetTypeRecommendedSpending(input: $input, condition: $condition) {
      id
      budgetType {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      recommendedAllocatedSpending
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBudgetTypeRecommendedSpending = /* GraphQL */ `
  mutation UpdateBudgetTypeRecommendedSpending(
    $input: UpdateBudgetTypeRecommendedSpendingInput!
    $condition: ModelBudgetTypeRecommendedSpendingConditionInput
  ) {
    updateBudgetTypeRecommendedSpending(input: $input, condition: $condition) {
      id
      budgetType {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      recommendedAllocatedSpending
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBudgetTypeRecommendedSpending = /* GraphQL */ `
  mutation DeleteBudgetTypeRecommendedSpending(
    $input: DeleteBudgetTypeRecommendedSpendingInput!
    $condition: ModelBudgetTypeRecommendedSpendingConditionInput
  ) {
    deleteBudgetTypeRecommendedSpending(input: $input, condition: $condition) {
      id
      budgetType {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      recommendedAllocatedSpending
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createExpense = /* GraphQL */ `
  mutation CreateExpense(
    $input: CreateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    createExpense(input: $input, condition: $condition) {
      id
      budgetType {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      amount
      date
      budgetID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
      id
      budgetType {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      amount
      date
      budgetID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
      id
      budgetType {
        Home {
          Rent
          Insurance
          Supplies
        }
        AutoAndTransport
        BillsAndUtilities
        Entertainment
        FeesAndCharges
        WealthPlanning
        Health
        Fitness
        Income
        Misc
        PersonalCare
        Pets
        Uncategorized
        Travel
        Shopping
        Food {
          FastFood
          AlcoholAndBars
          Groceries
        }
      }
      amount
      date
      budgetID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
