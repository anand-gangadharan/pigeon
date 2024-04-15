import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "Pigeon_items";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    console.log("Event ", event)
    switch (event.resource) {
      case "/items/{itemId}":
        body = await processItem(event, body);
        break;
      default:
        throw new Error(`Unsupported resource: "${event.resource}"`);
        break;
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
async function processItem(event, body) {
  switch (event.httpMethod) {
    case "GET":
      await fetch();
      break;
    case "DELETE":
      await remove();
      break;
    case "PUT":
      await create();
      break;
    default:
      throw new Error(`Unsupported http method: "${event.httpMethod}"`);
  }
  return body;

  async function create() {
    let requestJSON = JSON.parse(event.body);
    await dynamo.send(
      new PutCommand({
        TableName: tableName,
        Item: {
          id: requestJSON.id,
          price: requestJSON.price,
          name: requestJSON.name,
        },
      })
    );
    body = `Put item ${requestJSON.id}`;
  }

  async function remove() {
    await dynamo.send(
      new DeleteCommand({
        TableName: tableName,
        Key: {
          id: event.pathParameters.itemId,
        },
      })
    );
    body = `Deleted item ${event.pathParameters.itemId}`;
  }

  async function fetch() {
    itemId = event.pathParameters.itemId;
    if (id) {
      body = await dynamo.send(
        new GetCommand({
          TableName: tableName,
          Key: {
            id: itemId,
          },
        })
      );
      body = body.Item;
    } else {
      body = await dynamo.send(
        new ScanCommand({ TableName: tableName })
      );
      body = body.Items;
    }
  }
}

