/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomBudgetCategory = /* GraphQL */ `
  query GetCustomBudgetCategory($id: ID!) {
    getCustomBudgetCategory(id: $id) {
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
export const listCustomBudgetCategories = /* GraphQL */ `
  query ListCustomBudgetCategories(
    $filter: ModelCustomBudgetCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomBudgetCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const customBudgetCategoriesByBudgetID = /* GraphQL */ `
  query CustomBudgetCategoriesByBudgetID(
    $budgetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCustomBudgetCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customBudgetCategoriesByBudgetID(
      budgetID: $budgetID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        birthday
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBudget = /* GraphQL */ `
  query GetBudget($BudgetName: String!) {
    getBudget(BudgetName: $BudgetName) {
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
export const listBudgets = /* GraphQL */ `
  query ListBudgets(
    $BudgetName: String
    $filter: ModelBudgetFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBudgets(
      BudgetName: $BudgetName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        budgets {
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
        CustomBudgetCategories {
          nextToken
        }
        Expenses {
          nextToken
        }
        BudgetTypeRecommendedSpending {
          id
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
      nextToken
    }
  }
`;
export const getBudgetTypeRecommendedSpending = /* GraphQL */ `
  query GetBudgetTypeRecommendedSpending($id: ID!) {
    getBudgetTypeRecommendedSpending(id: $id) {
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
export const listBudgetTypeRecommendedSpendings = /* GraphQL */ `
  query ListBudgetTypeRecommendedSpendings(
    $filter: ModelBudgetTypeRecommendedSpendingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBudgetTypeRecommendedSpendings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getExpense = /* GraphQL */ `
  query GetExpense($id: ID!) {
    getExpense(id: $id) {
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
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        amount
        date
        budgetID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const expensesByBudgetID = /* GraphQL */ `
  query ExpensesByBudgetID(
    $budgetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    expensesByBudgetID(
      budgetID: $budgetID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        amount
        date
        budgetID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
