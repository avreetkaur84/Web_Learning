const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}



//line 5:  it is made to convert html data into json format. without this, we will gwt whole html data file instead of the data we require in json format.