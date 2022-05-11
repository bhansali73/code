function titleCase(str) {
    str = str.toLowerCase();
    let newTitle = str.split(" ");
    let updateTitle = [];

    for (let i = 0; i < newTitle.length; i++) {
        updateTitle[i] = newTitle[i].slice(0, 1).toUpperCase() + newTitle[i].slice(1);
    }
    str = updateTitle.join(" ")
    console.log(str);
    return str;
}

titleCase("!'m a little tea pot")