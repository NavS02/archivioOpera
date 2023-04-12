import FormField from "../FormField";


export default {
  collection: "preferred",
  fields() {
    return [
      new FormField({ name: "id", label: "ID", type: "text", value: "" }),

    ]
  },
  tableFields() {
    return [
      { key: "id_opera", label: "ID", sortable: false },
    ];
  },
};
