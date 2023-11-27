import Realm from "realm";

class TaskModel {
  static schema = {
    name: "Task",
    properties: {
      id: "string",
      owner: "string",
      secret: "string",
      server: "string",
      farm: "int",
      title: "string",
      ispublic: "int",
      isfriend: "int",
      isfamily: "int",
      is_primary: "int",
      has_comment: "int",
    },
  };
}

const realm = new Realm({ schema: [TaskModel] });

export default realm;
