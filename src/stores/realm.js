import Realm from "realm";

class TaskModel {
  static schema = {
    name: "Task",
    properties: {
      id: "string",
      title: "string",
      completed: "bool",
    },
  };
}

const realm = new Realm({ schema: [TaskModel] });

export default realm;
