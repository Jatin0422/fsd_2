const sub =

{

    "FSD": [

        {

            "Topic": "HTML",

            "course": "Beginer",

            "content": ["tags", "table", "form"],

        },

        {

            "Topic": "CSS",

            "course": "Beginer",

            "content": ["tags", "table", "form"]

        }

    ]
};
for (i in sub.FSD) {
    for (x in sub.FSD[i]) {
        console.log(sub.FSD[i][x])
    }
}
for (i of sub.FSD) {
    console.log(i.Topic)
    console.log(i.course)
    console.log(i.cotent)
}