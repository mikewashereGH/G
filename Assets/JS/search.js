let jsonData = `[
    {
        "Name": "Infectio",
        "Type": "Puzzle",
        "Description": "A simple and fun puzzle game where you have to infect all the blocks by switching colors.",
        "Preview": "https://play-lh.googleusercontent.com/V31nfvzNcu_47lr8y2L7m3uw9azrpGyox88gpzhQxwfZSXliFJmIRVSlYJL1eOo_X2U",
        "Share": "https://mikewasheregh.github.io/G/Pages/Games/Infectio/index.html",
        "Play": "../Pages/Games/Infectio/index.html",
        "EditedBY": "Mike",
        "CreatedBY": "Mike",
        "Open": "home.html",
        "Date": "02/28/23",
        "Time": "10:59 AM",
        "Status": "C0",
        "LVL": "10-Infinity LVLs",
        "HTP": "<div class="overview-text-item">3+ years working as a product designer.</div>
        <div class="overview-text-item">A portfolio that highlights your approach to problem
            solving, as well as you skills in UI.</div>
        <div class="overview-text-item">Experience conducting research and building out smooth
            flows.</div>
        <div class="overview-text-item">Excellent communication skills with a well-defined
            design process.</div>
        <div class="overview-text-item">Familiarity with design tools like Sketch and Figma
        </div>
        <div class="overview-text-item">Up-level our overall design and bring consistency to
            end-user facing properties</div>"
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
                        <img src="${obj.Preview}">
                    <div class="menu-dot"></div>
                </div>

                <div class="job-card-title">${obj.Name}</div>
                    <div class="job-card-subtitle">
                        ${obj.Description}
                    </div>

                    <div class="job-detail-buttons">
                        <button class="search-buttons detail-button">${obj.Type}</button>
                        <button class="search-buttons detail-button">Added ${diffrence} days ago</button>
                    </div>

                    <div class="job-card-buttons">
                        <a href="${obj.Play}"><button class="search-buttons card-buttons">Play Game</button></a>
                        <a href="#"><button class="search-buttons card-buttons-msg">Information</button></a>
                    </div>
                </div>

                <div class="job-overview">
                            <div class="job-overview-cards">
                <div class="job-overview-card">
                                    <div class="job-card overview-card">
                                        <div class="overview-wrapper">
                                            <img src="${obj.Preview}"
                                            <div class="overview-detail">
                                                <div class="job-card-title">${obj.Name}</div>
                                                <div class="job-card-subtitle">
                                                    Created by ${obj.CreatedBY} & edited by ${obj.EditedBY}
                                                </div>
                                            </div>
                                            <svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-heart">
                                                <path
                                                    d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                        </div>
                                        <div class="job-overview-buttons">
                                            <div class="search-buttons time-button">${obj.Type}</div>
                                            <div class="search-buttons level-button">${obj.Status}</div>
                                            <div class="job-stat">New</div>
                                            <div class="job-day">${diffrence}D</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="job-explain">
                                <img class="job-bg" alt="">
                                <div class="job-logos">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                        style="background-color:#f76754">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M0 .5h4.2v23H0z" fill="#042b48"
                                            data-original="#212121"></path>
                                        <path xmlns="http://www.w3.org/2000/svg"
                                            d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z" fill="#fefefe"
                                            data-original="#f4511e"></path>
                                    </svg>
                                </div>
                                <div class="job-explain-content">
                                    <div class="job-title-wrapper">
                                        <div class="job-card-title">${obj.Name}</div>
                                        <div class="job-action">
                                            <svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-heart">
                                                <path
                                                    d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                            <a href="${obj.Share}">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="feather feather-share-2">
                                                    <circle cx="18" cy="5" r="3" />
                                                    <circle cx="6" cy="12" r="3" />
                                                    <circle cx="18" cy="19" r="3" />
                                                    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="job-subtitle-wrapper">
                                        <div class="company-name">Patreon <span class="comp-location">Londontowne, MD.</span>
                                        </div>
                                        <div class="posted">Posted ${diffrence} days ago<span class="app-number">0 users played</span>
                                        </div>
                                    </div>
                                    <div class="explain-bar">
                                        <div class="explain-contents">
                                            <div class="explain-title">Type</div>
                                            <div class="explain-subtitle">${obj.Type}</div>
                                        </div>
                                        <div class="explain-contents">
                                            <div class="explain-title">Added Date</div>
                                            <div class="explain-subtitle">${obj.Date}</div>
                                        </div>
                                        <div class="explain-contents">
                                            <div class="explain-title">Added Time</div>
                                            <div class="explain-subtitle">${obj.Time}</div>
                                        </div>
                                        <div class="explain-contents">
                                            <div class="explain-title">Level Count</div>
                                            <div class="explain-subtitle">${obj.LVL}</div>
                                        </div>
                                    </div>
                                    <div class="overview-text">
                                        <div class="overview-text-header">Overview</div>
                                        <div class="overview-text-subheader">${obj.Description}</div>
                                    </div>
                                    <div class="overview-text">
                                        <div class="overview-text-header">How to play</div>
                                        ${obj.HTP}
                                    </div>
                                </div>
                            </div>
                `
            x.appendChild(elem)
        }
    }
}