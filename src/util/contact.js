import { apiRequestExternal } from "./util.js";

const endpoint = `${process.env.NEXT_PUBLIC_AIRTABLE_ENDPOINT}?tableName=${process.env.NEXT_PUBLIC_AIRTABLE_NAME}`;

function submit(data) {
  return apiRequestExternal(endpoint, "POST", [
    {
      name: data.name,
      phone: data.phone,
      // Message: data.message,
    },
  ]);
}

const contact = { submit };

export default contact;
