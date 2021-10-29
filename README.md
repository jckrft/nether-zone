# nether-zone

https://vigilant-clarke-36639b.netlify.app/
                                     

### Description: 
the best peep show quotes built using Airtable and React. The menu features pages for each character, when clicked they will show a carosel of best quotes along with information such as series and episode number and name. Each page will also feature a comment section to add your own favorite quote.

### Wireframes: 

https://whimsical.com/the-nether-zone-5ua3FPNVeMUaWc1FNQWCVM

![imageAlt](https://i.imgur.com/B65BlMI.png "wireframe")
![imageAlt](https://i.imgur.com/h4uRZul.png "jeremy page")
![imageAlt](https://i.imgur.com/cqbitgJ.png "wireframe for mobile")

### Component Hierarchy:

![imageAlt](https://i.imgur.com/aceg0Wm.png "component hierarchy")

### API: 
Airtable was used to create and store addition comments & quotes from users. 
```
{
    "records": [
        {
            "id": "recC273HHForui0Sx",
            "fields": {
                "yourname": "Sophie",
                "yourquote": "I thought I knew what I was doing with my life but I haven't got a fucking clue"
            },
            "createdTime": "2021-10-24T21:02:33.000Z"
        },
        {
            "id": "recL2y67HbCpR34Qj",
            "fields": {
                "yourname": "Jeff",
                "yourquote": "Soz!"
            },
            "createdTime": "2021-10-24T22:27:30.000Z"
        }
    ],
    "offset": "itrNC5djVgTYlN3I5/recL2y67HbCpR34Qj"
}
```

### MVP 

* Create React app
* Create and impliment Airtable
* Use Axios for a GET and POST
* Utilize six components
* Style using CSS & Flex Box 
* Using Bootstrap carousel, populate each page with specific quote images  
* Add a media query for mobile                                            

### Post-MVP
* Hamburger menu 
* Animated home page art

### Goals
| Day             | Task                                | y/n   |
| -------------   |:-------------:                      | -----:|
| Friday 10/22    | finish pitch                        |   y   |
| Saturday 10/23  | pseduo code/Create react & airtable |   y   |
| Sunday 10/24    | axios request/component structure   |   y   |
| Monday 10/25    | finish building out components      |   y   |
| Tuesday 10/26   | build nav bar and work on css       |   y   |
| Wednesday 10/27 | continue styling and nav bar        |   y   |
| Thursday 10/28  | polish                              |   y   |
| Friday 10/29    | present                             |   y   |

### Timeframe
| Task                                     | Estimated              | Actual |
| -------------                            |:-------------:         | -----: |
| creating API                             | 20 min                 | 20 min |
| solidify idea                            | 30 min                 | 20 min |
| finish pitch                             | 3 hr                   | 4 hr   |
| create React & decide hierarchy          | 1 hr                   | 1 hr   |
| build state and pass through to children | 1 hr                   | 1 hr   |
| finish building page components          | 2 hr                   | 3 hr   |
| finish airtable GET/POST components      | 2 hr                   | 2 hr   |
| Navbar component                         | 1 hr                   | 4 hr   |
| style pages with CSS & flex              | 5 hr                   | 10 hr  |
| post MVP                                 | 3 hr                   | 6 hr   |
| revisions                                | 1 hr                   | 1 hr   |

### SWOT Analysis

Strengths:

I feel fairly comfortable with React. I am confident in the actual building of the React components, as well as Airtable. 

Weaknesses: 

There are some aspects of React that I am not totally clear on, namely useParams. At times passing passing state and props can be confusing. I do not like class components and prefer functional. 

Opportunities: 

This project will allow me to practice and put into use the things I have learned. The process of debugging should also be informative. Having to continue to use CSS will also better strengthen these skills. 

Threats: 

I tend to throw everything at the wall to see what sticks, so to speak, when dealing with CSS. I know especially with this how that can be detrimental and conflict with other styles without my knowledge. I also often start something else before I am finished with what I am doing, so it would help to be more clear and organized. 
