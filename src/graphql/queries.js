/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        timestamp
        createdAt
        updatedAt
        owner
        feedback {
          items {
            rating
          }
        }
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      timestamp
      createdAt
      updatedAt
      owner
    }
  }
`;
export const eventsByUser = /* GraphQL */ `
  query EventsByUser(
    $name: String
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByUser(
      name: $name
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        timestamp
        createdAt
        updatedAt
        owner
        feedback {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getFeedback = /* GraphQL */ `
  query GetFeedback($id: ID!) {
    getFeedback(id: $id) {
      id
      rating
      content
      eventID
      owner
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listFeedbacks = /* GraphQL */ `
  query ListFeedbacks(
    $filter: ModelFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        content
        eventID
        owner
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const feedbackByEvent = /* GraphQL */ `
  query FeedbackByEvent(
    $eventID: ID
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    feedbackByEvent(
      eventID: $eventID
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        rating
        content
        eventID
        owner
        timestamp
        createdAt
        updatedAt
        event {
          id
          name
          description
          timestamp
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
