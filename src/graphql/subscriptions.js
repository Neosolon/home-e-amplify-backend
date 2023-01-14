/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomBudgetCategory = /* GraphQL */ `
  subscription OnCreateCustomBudgetCategory(
    $filter: ModelSubscriptionCustomBudgetCategoryFilterInput
  ) {
    onCreateCustomBudgetCategory(filter: $filter) {
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
export const onUpdateCustomBudgetCategory = /* GraphQL */ `
  subscription OnUpdateCustomBudgetCategory(
    $filter: ModelSubscriptionCustomBudgetCategoryFilterInput
  ) {
    onUpdateCustomBudgetCategory(filter: $filter) {
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
export const onDeleteCustomBudgetCategory = /* GraphQL */ `
  subscription OnDeleteCustomBudgetCategory(
    $filter: ModelSubscriptionCustomBudgetCategoryFilterInput
  ) {
    onDeleteCustomBudgetCategory(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
    $owner: String
  ) {
    onCreateUser(filter: $filter, id: $id, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
    $owner: String
  ) {
    onUpdateUser(filter: $filter, id: $id, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
    $owner: String
  ) {
    onDeleteUser(filter: $filter, id: $id, owner: $owner) {
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
export const onCreateBudget = /* GraphQL */ `
  subscription OnCreateBudget(
    $filter: ModelSubscriptionBudgetFilterInput
    $owner: String
  ) {
    onCreateBudget(filter: $filter, owner: $owner) {
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
export const onUpdateBudget = /* GraphQL */ `
  subscription OnUpdateBudget(
    $filter: ModelSubscriptionBudgetFilterInput
    $owner: String
  ) {
    onUpdateBudget(filter: $filter, owner: $owner) {
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
export const onDeleteBudget = /* GraphQL */ `
  subscription OnDeleteBudget(
    $filter: ModelSubscriptionBudgetFilterInput
    $owner: String
  ) {
    onDeleteBudget(filter: $filter, owner: $owner) {
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
export const onCreateBudgetTypeRecommendedSpending = /* GraphQL */ `
  subscription OnCreateBudgetTypeRecommendedSpending(
    $filter: ModelSubscriptionBudgetTypeRecommendedSpendingFilterInput
    $owner: String
  ) {
    onCreateBudgetTypeRecommendedSpending(filter: $filter, owner: $owner) {
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
export const onUpdateBudgetTypeRecommendedSpending = /* GraphQL */ `
  subscription OnUpdateBudgetTypeRecommendedSpending(
    $filter: ModelSubscriptionBudgetTypeRecommendedSpendingFilterInput
    $owner: String
  ) {
    onUpdateBudgetTypeRecommendedSpending(filter: $filter, owner: $owner) {
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
export const onDeleteBudgetTypeRecommendedSpending = /* GraphQL */ `
  subscription OnDeleteBudgetTypeRecommendedSpending(
    $filter: ModelSubscriptionBudgetTypeRecommendedSpendingFilterInput
    $owner: String
  ) {
    onDeleteBudgetTypeRecommendedSpending(filter: $filter, owner: $owner) {
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
export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense(
    $filter: ModelSubscriptionExpenseFilterInput
    $owner: String
  ) {
    onCreateExpense(filter: $filter, owner: $owner) {
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
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense(
    $filter: ModelSubscriptionExpenseFilterInput
    $owner: String
  ) {
    onUpdateExpense(filter: $filter, owner: $owner) {
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
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense(
    $filter: ModelSubscriptionExpenseFilterInput
    $owner: String
  ) {
    onDeleteExpense(filter: $filter, owner: $owner) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote(
    $filter: ModelSubscriptionPrivateNoteFilterInput
    $owner: String
  ) {
    onCreatePrivateNote(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote(
    $filter: ModelSubscriptionPrivateNoteFilterInput
    $owner: String
  ) {
    onUpdatePrivateNote(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote(
    $filter: ModelSubscriptionPrivateNoteFilterInput
    $owner: String
  ) {
    onDeletePrivateNote(filter: $filter, owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
