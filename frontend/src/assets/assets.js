import blog_pic_1 from './blog_pic_1.png';
import blog_pic_2 from './blog_pic_2.png';
import blog_pic_3 from './blog_pic_3.png';
import blog_pic_4 from './blog_pic_4.png';
import blog_pic_5 from './blog_pic_5.png';
import blog_pic_6 from './blog_pic_6.png';
import blog_pic_7 from './blog_pic_7.png';
import blog_pic_8 from './blog_pic_8.png';
import blog_pic_9 from './blog_pic_9.png';
import blog_pic_10 from './blog_pic_10.png';
import facebook_icon from './facebook_icon.svg'
import googleplus_icon from './googleplus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import logo from './logo.png'
import arrow from './arrow.svg'
import logo_light from './logo_light.svg'
import blog_icon from './blog_icon.png'
import add_icon from './add_icon.svg'
import list_icon from './list_icon.svg'
import email_icon from './email_icon.png'
import upload_area from './upload_area.svg'
import user_icon from './user_icon.svg'
import bin_icon from './bin_icon.svg'
import comment_icon from './comment_icon.svg'
import tick_icon from './tick_icon.svg'
import star_icon from './star_icon.svg'
import cross_icon from './cross_icon.svg'
import home_icon from './home_icon.svg'
import gradientBackground from './gradientBackground.png'
import dashboard_icon_1 from './dashboard_icon_1.svg'
import dashboard_icon_2 from './dashboard_icon_2.svg'
import dashboard_icon_3 from './dashboard_icon_3.svg'
import dashboard_icon_4 from './dashboard_icon_4.svg'


export const assets = {
    facebook_icon,
    googleplus_icon,
    twitter_icon,
    logo,
    arrow,
    logo_light,
    blog_icon,
    add_icon,
    email_icon,
    upload_area,
    user_icon,
    bin_icon,
    comment_icon,
    tick_icon,
    star_icon,
    home_icon,
    gradientBackground,
    list_icon,
    cross_icon,
    dashboard_icon_1,
    dashboard_icon_2,
    dashboard_icon_3,
    dashboard_icon_4,
}
export const blogCategories = ['All', 'Club Announcements', 'Event Recaps', 'Experiences', 'News Feed','Placement Stories'];

export const blog_data = [
    {
        "_id": "6811b8c3ed57ecc68a99abc1",
        "title": "New Member Orientation Session This Friday",
        "description": "<h2>Welcome New Members!</h2><p>We're excited to announce our quarterly new member orientation session this Friday at the main campus hall. This is your chance to meet fellow members and learn about our club activities.</p><h3>Agenda</h3><p>Introduction to club leadership, overview of upcoming events, and networking session. Don't miss this opportunity to get involved!</p>",
        "category": "Club Announcements",
        "image": blog_pic_1,
        "createdAt": "2025-04-30T10:00:00.000Z",
        "updatedAt": "2025-04-30T10:00:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Get ready for an exciting semester ahead"
    },

    // Event Recaps
    {
        "_id": "6811b8c4ed57ecc68a99abc2",
        "title": "Annual Tech Fest 2024 Success",
        "description": "<h2>Tech Fest 2024: Innovation Unleashed</h2><p>Our annual tech fest concluded with great success! Over 500 participants engaged in workshops, hackathons, and tech talks throughout the weekend.</p><h3>Key Moments</h3><p>From AI workshops to robotics demonstrations, the event showcased incredible talent and innovation from our student community.</p>",
        "category": "Event Recaps",
        "image": blog_pic_2,
        "createdAt": "2025-04-29T16:30:00.000Z",
        "updatedAt": "2025-04-29T16:30:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Celebrating innovation and collaboration"
    },

    // Experiences
    {
        "_id": "6811b8c5ed57ecc68a99abc3",
        "title": "My Summer Internship at Microsoft",
        "description": "<h2>Three Months in Seattle</h2><p>This summer I had the incredible opportunity to intern at Microsoft's headquarters. The experience transformed my perspective on software development.</p><h3>Key Learnings</h3><p>Working on real projects with industry experts taught me practical skills that go beyond classroom knowledge.</p>",
        "category": "Experiences",
        "image": blog_pic_3,
        "createdAt": "2025-04-28T12:45:00.000Z",
        "updatedAt": "2025-04-28T12:45:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "A transformative professional journey"
    },

    // News Feed
    {
        "_id": "6811b8c6ed57ecc68a99abc4",
        "title": "Campus Wi-Fi Upgrade Complete",
        "description": "<h2>Enhanced Network Infrastructure</h2><p>The campus-wide Wi-Fi upgrade has been successfully completed. Students can now enjoy faster and more reliable internet connectivity across all academic buildings.</p><h3>Improvements</h3><p>New access points and upgraded bandwidth ensure seamless online learning and research capabilities.</p>",
        "category": "News Feed",
        "image": blog_pic_4,
        "createdAt": "2025-04-30T09:00:00.000Z",
        "updatedAt": "2025-04-30T09:00:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Better connectivity for academic excellence"
    },

    // Placement Stories
    {
        "_id": "6811b8c7ed57ecc68a99abc5",
        "title": "From Campus to Corporate: My Amazon Journey",
        "description": "<h2>Securing My Dream Role</h2><p>After months of preparation and multiple interview rounds, I'm thrilled to share my placement story at Amazon as a software development engineer.</p><h3>Preparation Tips</h3><p>Consistent coding practice and mock interviews were key to my success in the rigorous selection process.</p>",
        "category": "Placement Stories",
        "image": blog_pic_5,
        "createdAt": "2025-04-27T15:20:00.000Z",
        "updatedAt": "2025-04-27T15:20:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Navigating the path to top tech companies"
    },

    // Additional Club Announcements
    {
        "_id": "6811b8c8ed57ecc68a99abc6",
        "title": "Hackathon Registration Now Open",
        "description": "<h2>24-Hour Coding Challenge</h2><p>Registration for our annual 24-hour hackathon is now open! Form your teams and get ready to build innovative solutions to real-world problems.</p><h3>Prizes</h3><p>Exciting prizes await the top three teams, including internship opportunities and tech gadgets.</p>",
        "category": "Club Announcements",
        "image": blog_pic_6,
        "createdAt": "2025-04-26T11:15:00.000Z",
        "updatedAt": "2025-04-26T11:15:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Code, create, and compete"
    },

    // Additional Event Recaps
    {
        "_id": "6811b8c9ed57ecc68a99abc7",
        "title": "Alumni Meet 2024 Highlights",
        "description": "<h2>Reconnecting with Graduates</h2><p>Our annual alumni meet brought together graduates from various batches, creating a platform for networking and knowledge sharing.</p><h3>Success Stories</h3><p>Alumni shared their career journeys and offered valuable insights to current students about industry trends.</p>",
        "category": "Event Recaps",
        "image": blog_pic_7,
        "createdAt": "2025-04-25T17:40:00.000Z",
        "updatedAt": "2025-04-25T17:40:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Bridging past and present students"
    },

    // Additional Experiences
    {
        "_id": "6811b8caed57ecc68a99abc8",
        "title": "Research Project: Six Months Later",
        "description": "<h2>My Undergraduate Research Journey</h2><p>Working on my final year research project taught me valuable lessons in persistence, problem-solving, and academic writing.</p><h3>Challenges</h3><p>From literature review to data analysis, each phase presented unique challenges that helped me grow as a researcher.</p>",
        "category": "Experiences",
        "image": blog_pic_8,
        "createdAt": "2025-04-24T14:25:00.000Z",
        "updatedAt": "2025-04-24T14:25:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Lessons from academic research"
    },

    // Additional News Feed
    {
        "_id": "6811b8cbed57ecc68a99abc9",
        "title": "New Library Resources Available",
        "description": "<h2>Expanded Digital Access</h2><p>The university library has added new digital resources including premium research databases and e-book collections for enhanced academic support.</p><h3>Access</h3><p>All resources are available through the library portal with student login credentials.</p>",
        "category": "News Feed",
        "image": blog_pic_9,
        "createdAt": "2025-04-23T13:10:00.000Z",
        "updatedAt": "2025-04-23T13:10:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "Enhanced academic resources for students"
    },

    // Additional Placement Stories
    {
        "_id": "6811b8cced57ecc68a99abca",
        "title": "My Goldman Sachs Placement Story",
        "description": "<h2>Breaking into Investment Banking</h2><p>Securing a role at Goldman Sachs required rigorous preparation and a strategic approach to the recruitment process.</p><h3>Interview Process</h3><p>Multiple rounds tested technical knowledge, analytical skills, and cultural fit with the organization.</p>",
        "category": "Placement Stories",
        "image": blog_pic_10,
        "createdAt": "2025-04-22T08:30:00.000Z",
        "updatedAt": "2025-04-22T08:30:00.000Z",
        "__v": 0,
        "isPublished": true,
        "subTitle": "A strategic approach to campus placements"
    }
]

export const comments_data = [
        {
            "_id": "6811ed9e7836a82ba747cb25",
            "blog": blog_data[0],
            "name": "Michael Scott",
            "content": "This is my new comment",
            "isApproved": false,
            "createdAt": "2025-04-30T09:30:06.918Z",
            "updatedAt": "2025-04-30T09:30:06.918Z",
            "__v": 0
        },
        {
            "_id": "6810a752fbb942aa7cbf4adb",
            "blog": blog_data[1],
            "name": "John Doe",
            "content": "This is a nice blog",
            "isApproved": false,
            "createdAt": "2025-04-29T10:17:54.832Z",
            "updatedAt": "2025-04-29T10:17:54.832Z",
            "__v": 0
        },
        {
            "_id": "680779aebef75c08f8b4898f",
            "blog": blog_data[2],
            "name": "Jack London",
            "content": "Hi this blog is must to read",
            "isApproved": true,
            "createdAt": "2025-04-22T11:12:46.547Z",
            "updatedAt": "2025-04-22T11:13:10.015Z",
            "__v": 0
        },
        {
            "_id": "680770aeb2897e5c28bf9b26",
            "blog": blog_data[3],
            "name": "Sam Smith",
            "content": "This is the best blog, everybody should read it",
            "isApproved": false,
            "createdAt": "2025-04-22T10:34:22.020Z",
            "updatedAt": "2025-04-22T10:34:22.020Z",
            "__v": 0
        },
        {
            "_id": "68076468e32055c94a696cf5",
            "blog": blog_data[4],
            "name": "Peter Lawrence",
            "content": "Honestly, I did not expect this to work, but it totally did. Saved my project!",
            "isApproved": true,
            "createdAt": "2025-04-22T09:42:00.444Z",
            "updatedAt": "2025-04-22T10:24:55.626Z",
            "__v": 0
        }
    ]

export const dashboard_data = {
    "blogs": 10,
    "comments": 5,
    "drafts": 0,
    "recentBlogs": blog_data.slice(0, 5),
}

export const footer_data = [
      {
          title: "Quick Links",
          links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
      },
      {
          title: "Need Help?",
          links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
      },
      {
          title: "Follow Us",
          links: ["Instagram", "Twitter", "Facebook", "YouTube"]
      }
  ];