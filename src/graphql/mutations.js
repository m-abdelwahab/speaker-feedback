/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      description
      timestamp
      createdAt
      updatedAt
      owner
      feedback {
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
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      description
      timestamp
      createdAt
      updatedAt
      owner
      feedback {
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
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      description
      timestamp
      createdAt
      updatedAt
      owner
      feedback {
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
  }
`;
export const createFeedback = /* GraphQL */ `
  mutation CreateFeedback(
    $input: CreateFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    createFeedback(input: $input, condition: $condition) {
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
export const updateFeedback = /* GraphQL */ `
  mutation UpdateFeedback(
    $input: UpdateFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    updateFeedback(input: $input, condition: $condition) {
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
        feedback {
          nextToken
        }
      }
    }
  }
`;
export const deleteFeedback = /* GraphQL */ `
  mutation DeleteFeedback(
    $input: DeleteFeedbackInput!
    $condition: ModelFeedbackConditionInput
  ) {
    deleteFeedback(input: $input, condition: $condition) {
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
        feedback {
          nextToken
        }
      }
    }
  }
`;
