let jsonData = `[
    {
        "Name": "Infectio",
        "Type": "Puzzle",
        "Description": "A simple and fun puzzle game where you have to infect all the blocks by switching colors.",
        "Preview": "https://play-lh.googleusercontent.com/V31nfvzNcu_47lr8y2L7m3uw9azrpGyox88gpzhQxwfZSXliFJmIRVSlYJL1eOo_X2U",
        "Play": "../Pages/Games/Infectio/index.html",
        "Open": "home.html",
        "Date": "02/28/23",
        "Time": "10:59 AM",
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
                                            <svg viewBox="0 -13 512 512" xmlns="http://www.w3.org/2000/svg"
                                                style="background-color:#2e2882">
                                                <g fill="#feb0a5">
                                                    <path
                                                        d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                                                    <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                                                </g>
                                                <path
                                                    d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                                                    fill="#feb0a5" />
                                            </svg>
                                            <div class="overview-detail">
                                                <div class="job-card-title">UI / UX Designer</div>
                                                <div class="job-card-subtitle">
                                                    2972 Westheimer Rd. Santa Ana.
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
                                            <div class="search-buttons time-button">Full Time</div>
                                            <div class="search-buttons level-button">Senior Level</div>
                                            <div class="job-stat">New</div>
                                            <div class="job-day">4d</div>
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
                                        <div class="job-card-title">UI /UX Designer</div>
                                        <div class="job-action">
                                            <svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-heart">
                                                <path
                                                    d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" class="feather feather-share-2">
                                                <circle cx="18" cy="5" r="3" />
                                                <circle cx="6" cy="12" r="3" />
                                                <circle cx="18" cy="19" r="3" />
                                                <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="job-subtitle-wrapper">
                                        <div class="company-name">Patreon <span class="comp-location">Londontowne, MD.</span>
                                        </div>
                                        <div class="posted">Posted 8 days ago<span class="app-number">98 Application</span>
                                        </div>
                                    </div>
                                    <div class="explain-bar">
                                        <div class="explain-contents">
                                            <div class="explain-title">Experience</div>
                                            <div class="explain-subtitle">Minimum 1 Year</div>
                                        </div>
                                        <div class="explain-contents">
                                            <div class="explain-title">Work Level</div>
                                            <div class="explain-subtitle">Senior level</div>
                                        </div>
                                        <div class="explain-contents">
                                            <div class="explain-title">Employee Type</div>
                                            <div class="explain-subtitle">Full Time Jobs</div>
                                        </div>
                                        <div class="explain-contents">
                                            <div class="explain-title">Offer Salary</div>
                                            <div class="explain-subtitle">$2150.0 / Month</div>
                                        </div>
                                    </div>
                                    <div class="overview-text">
                                        <div class="overview-text-header">Overview</div>
                                        <div class="overview-text-subheader">We believe that design (and you) will be critical
                                            to the company's success. You will work with our founders and our early customers to
                                            help define and build our product functionality, while maintaining the quality bar
                                            that customers have come to expect from modern SaaS applications. You have a strong
                                            background in product design with a quantitavely anf qualitatively analytical
                                            mindset. You will also have the opportunity to craft our overall product and visual
                                            identity and should be comfortable to flex into working.</div>
                                    </div>
                                    <div class="overview-text">
                                        <div class="overview-text-header">Job Description</div>
                                        <div class="overview-text-item">3+ years working as a product designer.</div>
                                        <div class="overview-text-item">A portfolio that highlights your approach to problem
                                            solving, as well as you skills in UI.</div>
                                        <div class="overview-text-item">Experience conducting research and building out smooth
                                            flows.</div>
                                        <div class="overview-text-item">Excellent communication skills with a well-defined
                                            design process.</div>
                                        <div class="overview-text-item">Familiarity with design tools like Sketch and Figma
                                        </div>
                                        <div class="overview-text-item">Up-level our overall design and bring consistency to
                                            end-user facing properties</div>
                                    </div>
                                </div>
                            </div>
                `
            x.appendChild(elem)
        }
    }
}