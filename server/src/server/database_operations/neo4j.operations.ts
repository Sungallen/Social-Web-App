import neo4j, {
  Neo4jError,
  Result,
  ResultSummary,
  Session,
} from "neo4j-driver";
import config from "../../config/config";
const driver = neo4j.driver(
  config.neo4jUrl,
  neo4j.auth.basic(config.neo4jUser, config.neo4jPass)
);
const session: Session = driver.session(config.neo4jDatabase);

export const neo4jUserRegister = (queryString: string) =>
  new Promise<any>(async (resolve, reject) => {
    try {
      const result = await session.run(queryString);
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
