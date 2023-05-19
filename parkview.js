const referals = [
    {
        "title": "Name",
        "type": "text"
      },
      {
        "title": "Referral ID",
        "type": "text"
      },
      {
        "title": "Person",
        "type": "people"
      },
      {
        "title": "Status",
        "type": "status",
        "labels": {
            "14": "In Review",
            "3": "Maybe",
            "1": "Approved",
            "2": "Declined"
        }
      },
      {
        "title": "Reason - Approved / Declined / Maybe",
        "type": "status",
        "labels": {
            "7": "DEC - Arson",
            "4": "DEC - Learning Disability",
            "109": "DEC - Mental Health",
            "110": "DEC - Physical Disability",
            "107": "DEC - COnvicted Sex Offender",
            "104": "DEC - Severe Dependency On Drugs/Alchohol",
            "11": "App - ",
            "12": "App - ",
            "12": "App - ",
            "14": "App - ", 
            "15": "MB - ",
            "13": "MB - "
        }        
      },
      {
        "title": "Reasoning - Maybe / Approved / Declined",
        "type": "long_text"
      },
      {
        "title": "Local Authority",
        "type": "board-relation"
      },
      {
        "title": "Initials",
        "type": "text"
      },
      {
        "title": "Gender",
        "type": "status",
        "labels": {
            "13": "Female",
            "7": "Male"
        }
      },
      {
        "title": "Date Of Birth",
        "type": "date"
      },
      {
        "title": "Age",
        "type": "formula"
      },
      {
        "title": "Tier Level",
        "type": "status",
        "labels": {
            "7": "Tier 1",
            "4": "Tier 2",
            "11": "Tier 3",
            "10": "Tier 4",

        }
      },
      {
        "title": "Suitable Locations",
        "type": "dropdown"
      },
      {
        "title": "External Comments",
        "type": "long_text"
      },
      {
        "title": "Internal Comments",
        "type": "long_text"
      },
      {
        "title": "Referral Document",
        "type": "file"
      },
      {
        "title": "Date Closed",
        "type": "date"
      },
      {
        "title": "Days To Close",
        "type": "formula"
      },
      {
        "title": "Date Engaged",
        "type": "date"
      },
      {
        "title": "Time To Engage",
        "type": "formula"
      }
]

const conditionalReferals = [
    {
        "title": "Referral ID",
        "type": "text"
      },
      {
        "title": "Person",
        "type": "people"
      },
      {
        "title": "Status",
        "type": "status",
        "labels": {
            "14": "Referral Pack Sent",
            "3": "Social Worker Contacted",
            "2": "Declined",
            "1": "Approved"
        }

      },
      {
        "title": "Reason - Approved / Declined",
        "type": "status"
      },
      {
        "title": "Reasoning - Approved / Declined",
        "type": "long-text"
      },
      {
        "title": "Local Authority",
        "type": "board-relation"
      },
      {
        "title": "Initials",
        "type": "text"
      },
      {
        "title": "Date Of Birth",
        "type": "date"
      },
      {
        "title": "Age",
        "type": "formula"
      },
      {
        "title": "Gender",
        "type": "status",
        "labels": {
            "13": "Female",
            "7": "Male"
        }
      },
      {
        "title": "Tier Level",
        "type": "status",
        "labels": {
            "7": "Tier 1",
            "4": "Tier 2",
            "11": "Tier 3",
            "10": "Tier 4",

        }
      },
      {
        "title": "Social Worker",
        "type": "board-relation"
      },
      {
        "title": "SW Email",
        "type": "lookup"
      },
      {
        "title": "SW Phone",
        "type": "lookup"
      },
      {
        "title": "External Comments",
        "type": "long-text"
      },
      {
        "title": "Internal Comments",
        "type": "long-text"
      },
      {
        "title": "Date Closed",
        "type": "date"
      },
      {
        "title": "Days To Close",
        "type": "formula"
      }
]

const formalOffers = [
    {
        "title": "Referral ID",
        "type": "text"
      },
      {
        "title": "Person",
        "type": "people"
      },
      {
        "title": "Status",
        "type": "status",
        "labels": {
            "14": "In Negotiation",
            "2": "Offer Declined",
            "1": "Offer Accepted",
            "5": "New Formal Offer"
        }
      },
      {
        "title": "Reason - Approved / Declined",
        "type": "status"
      },
      {
        "title": "Reasoning - Approved / Declined",
        "type": "text"
      },
      {
        "title": "Local Authority",
        "type": "board-relation"
      },
      {
        "title": "Initials",
        "type": "text"
      },
      {
        "title": "Date Of Birth",
        "type": "date"
      },
      {
        "title": "Age",
        "type": "formula"
      },
      {
        "title": "Gender",
        "type": "status",
        "labels": {
            "13": "Female",
            "7": "Male"
        }
      },
      {
        "title": "Tier Level",
        "type": "status",
        "labels": {
            "7": "Tier 1",
            "4": "Tier 2",
            "11": "Tier 3",
            "10": "Tier 4",

        }
      },
      {
        "title": "Social Worker",
        "type": "board-relation"
      },
      {
        "title": "SW Email",
        "type": "lookup"
      },
      {
        "title": "SW Phone",
        "type": "lookup"
      },
      {
        "title": "Est. Cost",
        "type": "numbers"
      },
      {
        "title": "Est. Revenue",
        "type": "numbers"
      },
      {
        "title": "Est. Placement Length",
        "type": "numbers"
      },
      {
        "title": "Date Created",
        "type": "date"
      },
      {
        "title": "Date Closed",
        "type": "date"
      },
      {
        "title": "Days To Close",
        "type": "formula"
      }
]

const activeClients = [
    {
        "title": "Referral ID",  
        "type": "text"
      },
      {
        "title": "Person",       
        "type": "people"
      },
      {
        "title": "Status",
        "type": "status",
        "labels": {
            "8": "Active Client",
            "2": "Ended Client",
            "5": "New Client"
        }
      },
      {
        "title": "Tier Level",
        "type": "status",
        "labels": {
            "7": "Tier 1",
            "4": "Tier 2",
            "11": "Tier 3",
            "10": "Tier 4",

        }
      },
      {
        "title": "Initials",
        "type": "text"
      },
      {
        "title": "Gender",
        "type": "status",
        "labels": {
            "13": "Female",
            "7": "Male"
        }
      },
      {
        "title": "Date Of Birth",
        "type": "date"
      },
      {
        "title": "Age",
        "type": "formula"
      },
      {
        "title": "Local Authority",
        "type": "board-relation"
      },
      {
        "title": "Est. Revenue",
        "type": "numbers"
      },
      {
        "title": "Est. Cost",
        "type": "numbers"
      },
      {
        "title": "Est. Placement Length",
        "type": "numbers"
      },
      {
        "title": "Act. Revenue",
        "type": "numbers"
      },
      {
        "title": "Act. Cost",
        "type": "numbers"
      },
      {
        "title": "Act. Placement Length",
        "type": "formula"
      },
      {
        "title": "Join Date",
        "type": "date"
      },
      {
        "title": "Leave Date",
        "type": "date"
      }
]

const contacts = [
    {
        "title": "Person",
        "type": "people"
      },
      {
        "title": "Contact Type",
        "type": "status",
        "labels": {
            "3": "Suppliers",
            "4": "Local Authorities"
        }
      },
      {
        "title": "Contact Role",
        "type": "dropdown"
      },
      {
        "title": "First Name",
        "type": "text"
      },
      {
        "title": "Last Name",
        "type": "text"
      },
      {
        "title": "Email",
        "type": "text"
      },
      {
        "title": "Job Title",
        "type": "text"
      },
      {
        "title": "Phone",
        "type": "text"
      },
      {
        "title": "Team Phone",
        "type": "text"
      },
      {
        "title": "Team Email",
        "type": "text"
      },
      {
        "title": "Date Created",
        "type": "date"
      },
      {
        "title": "link to Conditional Offers",
        "type": "board-relation"
      },
      {
        "title": "link to Formal Offers",
        "type": "board-relation"
      }
]

const accounts = [
    {
        "title": "Total Account Spend",
        "type": "lookup"
      },
      {
        "title": "Account Type",
        "type": "status"
      },
      {
        "title": "Active Clients",
        "type": "board-relation"
      },
      {
        "title": "Finance POC",
        "type": "board-relation"
      },
      {
        "title": "Finance POC Email",
        "type": "lookup"
      },
      {
        "title": "Finance POC Phone",
        "type": "lookup"
      },
      {
        "title": "Website",
        "type": "text"
      },
      {
        "title": "Address Line 1",
        "type": "text"
      },
      {
        "title": "Address Line 2",
        "type": "text"
      },
      {
        "title": "Town / City",
        "type": "text"
      },
      {
        "title": "County",
        "type": "text"
      },
      {
        "title": "Postal Code",
        "type": "text"
      },
      {
        "title": "Date Created",
        "type": "date"
      },
      {
        "title": "link to Formal Offers",
        "type": "board-relation"
      },
      {
        "title": "link to Referrals",
        "type": "board-relation"
      }
]

module.exports = {referals, conditionalReferals, formalOffers, activeClients, contacts, accounts}