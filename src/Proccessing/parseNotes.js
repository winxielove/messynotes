import links from "./links.json"

const parseNotes = (notes) => {
    var expList = []

    for (let n = 0; n < notes.length; n++) {
        const note = notes[n];
        let returnal = undefined

        for (let l = 0; l < Object.keys(links).length; l++) {
            const link = Object.keys(links)[l];
            console.log(link)
            if (links[link].includes(note)) {
                returnal = {
                    link: link,
                    content: note
                }
                break;
            }
        }

        if (returnal == undefined) {
            returnal = {
                link: "nolink",
                content: note
            }
        }

        expList.push(returnal)
    }

    return expList
}

export default parseNotes;