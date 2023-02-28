let jsonData = `[
    {
        "Name": "Infectio",
        "Type": "Puzzle",
        "Description": "A simple and fun puzzle game where you have to infect all the blocks by switching colors.",
        "Preview": "https://play-lh.googleusercontent.com/V31nfvzNcu_47lr8y2L7m3uw9azrpGyox88gpzhQxwfZSXliFJmIRVSlYJL1eOo_X2U",
        "Play": "../Pages/Games/Infectio/index.html",
        "Open": "home.html",
        "Date": "02/25/23",
        "Time": "10:59 AM",
        "Status": "C0",
	    "ID": "NA"
    },
    {
        "Name": "Multiplication",
        "Type": "Math",
        "Storage": "None",
        "Description": "A math game that is based on multiplication. It allows students to practice multiplication, while improving their speed and accuracy.",
        "Preview": "https://play-lh.googleusercontent.com/M9xYsC4u-_LEfG7DeNeSGfgi7XXF0JajLfORnm9CoHGh9Vn5o_IH8V9aHUAmFEYA1Q=w240-h480-rw",
        "Play": "../Pages/Games/Multiplication/index.html",
        "Open": "home.html",
        "Date": "02/27/23",
        "Time": "07:50 PM",
        "Status": "C0",
	    "ID": "NA"
    }
]`

let data = JSON.parse(jsonData)

function search_jsonData() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let obj = data[i];

        if (
            obj.Name.toLowerCase().includes(input) ||
            obj.Type.toLowerCase().includes(input) ||
            obj.Date.toLowerCase().includes(input) ||
            obj.Time.toLowerCase().includes(input) ||
            obj.Status.toLowerCase().includes(input)
        ) {
            function getNumberOfDays(start, end) {
                const date1 = new Date(start);
                const date2 = new Date(end);
                const oneDay = 1000 * 60 * 60 * 24;
                const diffInTime = date2.getTime() - date1.getTime();
                const diffInDays = Math.round(diffInTime / oneDay);
            
                return diffInDays;
            }
            
            let diffrence = getNumberOfDays(obj.Date, Date.now());

            const elem = document.createElement("p")

            elem.innerHTML = `
                <div class="job-card">
                    <div class="job-card-header">
                        <!--
                            <svg viewBox="0 -13 512 512" xmlns="http://www.w3.org/2000/svg" style="background-color:#2e2882">
                                <g fill="#feb0a5">
                                    <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                                    <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                                </g>
                                <path d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0" fill="#feb0a5" />
                            </svg>
                        -->
                        <img src="${obj.Preview}">
                    <div class="menu-dot"></div>
                </div>

                <div class="job-card-title">${obj.Name}</div>
                    <div class="job-card-subtitle">
                        ${obj.Description}
                    </div>

                    <div class="job-detail-buttons">
                        <button class="search-buttons detail-button">${obj.Type}</button>
                        <button class="search-buttons detail-button">Added ${diffrence}D ago</button>
                        <button class="search-buttons detail-button">Senior Level</button>
                    </div>

                    <p>Added ${diffrence}D ago</p>

                    <div class="job-card-buttons">
                        <button class="search-buttons card-buttons">Play Game</button>
                        <button class="search-buttons card-buttons-msg">Information</button>
                    </div>
                </div>
                `
            x.appendChild(elem)
        }
    }
}