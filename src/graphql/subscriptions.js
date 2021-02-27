/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateFeedback = /* GraphQL */ `
  subscription OnCreateFeedback($owner: String!) {
    onCreateFeedback(owner: $owner) {
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
export const onUpdateFeedback = /* GraphQL */ `
  subscription OnUpdateFeedback($owner: String!) {
    onUpdateFeedback(owner: $owner) {
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
export const onDeleteFeedback = /* GraphQL */ `
  subscription OnDeleteFeedback($owner: String!) {
    onDeleteFeedback(owner: $owner) {
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
