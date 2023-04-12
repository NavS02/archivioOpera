import FormField from "./FormField";

export default {
  collection: "pref",
  fields() {
    return [
      new FormField({
        name: "id_opera",
        label: "mstfinid opera",
        type: "text",
        value: "",
      }),
    ];
  },

  tableFields() {
    return [
      { key: "id_opera", label: "id opera", sortable: false },
      { key: "user_created", label: "User", sortable: false },
      { key: "date_created", label: "Date", sortable: false },

      { key: "actions", label: "Actions", sortable: false },
    ];
  },
};
