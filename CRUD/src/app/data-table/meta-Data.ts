const metaData = [
  {
    "type":"input",
    "name":"name",
    "label":"Name",
    "pattern":".{3,}",
    "required":true,
    "readOnly":true,
  },
  {
    "type":"input",
    "name":"age",
    "label":"Age",
    "pattern":"^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)",
    "required":true
  },
  {
    "type":"select",
    "name":"location",
    "label":"Location",
    "options":["chennai","madurai","trichy"]
  }
]
export default metaData;
