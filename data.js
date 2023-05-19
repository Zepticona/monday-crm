const MKTG_MB = [  
  {
    "title": "MKTG MB - Name",
    "type": "name"
  },
  {
    "title": "MKTG MB - Person",
    "type": "people"
  },
  {
    "title": "MKTG MB - Status",
    "type": "status",
    "labels": {
      "19": "New Submission",
      "14": "Live",
      "1": "Completed"
    }
  },
  {
    "title": "MKTG MB - Success / Failure",
    "type": "status",
    "labels": {
      "1": "Success",
      "2": "Failure"
    }
  },
  {
    "title": "MKTG MB - Launch Date",
    "type": "date"
  },
  {
    "title": "MKTG MB - Time Campaign Ran",
    "type": "timeline"
  },
  {
    "title": "MKTG MB - Product",
    "type": "dropdown"
  },
  {
    "title": "MKTG MB - Offer Type",
    "type": "status"
  },
  {
    "title": "MKTG MB - Track Ad Type",
    "type": "status",
    "labels": {
      "7": "MOFU",
      "4": "TOFU",
      "6": "BOFU"
    }
  },
  {
    "title": "MKTG MB - Date Created",
    "type": "date"
  },
  {
    "title": "MKTG MB - Date Completed",
    "type": "date"
  },
  {
    "title": "MKTG MB - Days To Complete",
    "type": "formula"
  },
  {
    "title": "MKTG MB - Team",
    "type": "people"
  }
]

const MKTG_IR = [    {
  "title": "MKTG IR - Name",
  "type": "text"
},
{
  "title": "MKTG IR - Person",
  "type": "people"
},
{
  "title": "MKTG IR - Status",
  "type": "status"
},
{
  "title": "MKTG IR - Link",
  "type": "link"
},
{
  "title": "MKTG IR - Date Created",
  "type": "date"
},
{
  "title": "MKTG IR - Date Completed",
  "type": "date"
},
{
  "title": "MKTG IR - Days To Complete",
  "type": "formula"
},
{
  "title": "MKTG IR - Team",
  "type": "people"
}
]

const MKTG_PA= [
  {
    "title": "MKTG PA - Name",
    "type": "text"
  },
  {
    "title": "MKTG PA - Owner",
    "type": "people"
  },
  {
    "title": "MKTG PA - Status",
    "type": "status",
    "labels": {
      "7": "Prospect / New Submission",
      "8": "Active",
      "1": "Completed",
      "105": "Disquialigied"
    }
  },
  {
    "title": "MKTG PA - POC First Name",
    "type": "text"
  },
  {
    "title": "MKTG PA - POC Last Name",
    "type": "text"
  },
  {
    "title": "MKTG PA - Company",
    "type": "text"
  },
  {
    "title": "MKTG PA - POC Email",
    "type": "text"
  },
  {
    "title": "MKTG PA - Website Link",
    "type": "link"
  },
  {
    "title": "MKTG PA - Type",
    "type": "status",
    "labels": {
      "7": "Affiliate",
      "4": "Influencer"
    }
  },
  {
    "title": "MKTG PA - Size",
    "type": "status"
  },
  {
    "title": "MKTG PA - List / IG Size",
    "type": "numbers"
  },
  {
    "title": "MKTG PA - Notes",
    "type": "long_text"
  },
  {
    "title": "MKTG PA - Date Created",
    "type": "date"
  },
  {
    "title": "MKTG PA - Team",
    "type": "people"
  }
]
const MKTG_PDCT = [
  
]
const MKTG_COPY = [
  {
  "title": "MKTG Copy - Name",
  "type": "text"
},
{
  "title": "MKTG Copy - Person",       
  "type": "people"
},
{
  "title": "MKTG Copy - Status",       
  "type": "status",
  "labels": {
    "1": "Completed",
    "4": "In Production",
    "19": "New Submission"
  }
},
{
  "title": "MKTG Copy - Lead Name",    
  "type": "text"
},
{
  "title": "MKTG Copy - Lead Email",
  "type": "text"
},
{
  "title": "MKTG Copy - Launch Date",
  "type": "date"
},
{
  "title": "MKTG Copy - Copy Due Date",
  "type": "date"
},
{
  "title": "MKTG Copy - Copy Required",
  "type": "dropdown"
},
{
  "title": "MKTG Copy - Priority",
  "type": "status",
  "labels": {
    "2": "High",
    "0": "Medium",
    "3": "Low"
  }
},
{
  "title": "MKTG Copy - Department Requesting",
  "type": "status"
},
{
  "title": "MKTG Copy - Other Departments Need Copy",
  "type": "dropdown"
},
{
  "title": "MKTG Copy - Related Background To Create Copy Required",
  "type": "status",
  "labels": {
    "2": "No",
    "1": "Yes"
  }
},
{
  "title": "MKTG Copy - Campaign Related ID",
  "type": "text"
},
{
  "title": "MKTG Copy - Offer Related To Copy",
  "type": "long_text"
},
{
  "title": "MKTG Copy - Inspiration / Angles / Examples",
  "type": "long_text"
},
{
  "title": "MKTG Copy - Goal Of The Copy",
  "type": "long_text"
},
{
  "title": "MKTG Copy - A/B Testing Required",
  "type": "status"
},
{
  "title": "MKTG Copy - Date Created",
  "type": "date"
},
{
  "title": "MKTG Copy - Date Completed",
  "type": "date"
},
{
  "title": "MKTG Copy - Days To Complete",
  "type": "formula"
},
{
  "title": "MKTG Copy - Team",
  "type": "people"
}]

const MKTG_Creative = [
  {
    "title": "MKTG Creative - Name",
    "type": "text"
  },
  {
    "title": "MKTG Creative - Person",
    "type": "people"
  },
  {
    "title": "MKTG Creative - Status",
    "type": "status",
    "labels": {
      "19": "New Submission",
      "4": "In Production",
      "1": "Completed"
    }
  },
  {
    "title": "MKTG Creative - Lead Name",
    "type": "text"
  },
  {
    "title": "MKTG Creative - Lead Email",
    "type": "text"
  },
  {
    "title": "MKTG Creative - Launch Date",
    "type": "date"
  },
  {
    "title": "MKTG Creative - Creative Due Date",
    "type": "date"
  },
  {
    "title": "MKTG Creative - Priority",
    "type": "status",
    "labels": {
      "2": "High",
      "0": "Medium",
      "3": "Low"
    }
  },
  {
    "title": "MKTG Creative - Project Type",
    "type": "status",
    "labels": {
      "7": "Creative Brief",
      "4": "Offer (if applicable)",
      "6": "Producsts Involved"
    }
  },
  {
    "title": "MKTG Creative - Department Requesting",
    "type": "status"
  },
  {
    "title": "MKTG Creative - Other Departments Need Creative",
    "type": "dropdown"
  },
  {
    "title": "MKTG Creative - Creative Assets Required",
    "type": "dropdown"
  },
  {
    "title": "MKTG Creative - Asset Type",
    "type": "status",
    "labels": {
      "7": "Video",
      "4": "Photo",
      "6": "Other"
    }
  },
  {
    "title": "MKTG Creative - Sizes Required",
    "type": "dropdown"
  },
  {
    "title": "MKTG Creative - Focus",
    "type": "status",
    "labels": {
      "4": "Product",
      "8": "Lifestyle"
    }
  },
  {
    "title": "MKTG Creative - Inspiration / Angles / Examples",
    "type": "long_text"
  },
  {
    "title": "MKTG Creative - Copy ID For Creative",
    "type": "text"
  },
  {
    "title": "MKTG Creative - Campaign Related ID",
    "type": "text"
  },
  {
    "title": "MKTG Creative - Date Created",
    "type": "date"
  },
  {
    "title": "MKTG Creative - Date Completed",
    "type": "date"
  },
  {
    "title": "MKTG Creative - Days To Complete",
    "type": "formula"
  },
  {
    "title": "MKTG Creative - Team",
    "type": "people"
  }
]

const Tech_Sprint = [
  {
    "title": "Tech Sprint - Name",
    "type": "text"
  },
  {
    "title": "Tech Sprint - Owner",
    "type": "people"
  },
  {
    "title": "Tech Sprint - Status",
    "type": "status",
    "labels": {
      "5": "New Submission",
      "109": "In Progress",
      "2": "Delayed",
      "19": "Staging",
      "1": "Completed"
    }
  },
  {
    "title": "Tech Sprint - Priority",
    "type": "status",
    "labels": {
      "2": "High",
      "9": "Medium",
      "3": "Low"
    }
  },
  {
    "title": "Tech Sprint - Sprint Type",
    "type": "status",
    "labels": {
      "4": "Storewide Sale",
      "6": "Mixpanel",
      "7": "Landing Page",
      "8": "Social Media",
      "9": "Klaviyo",
      "13": "Stamped.io"
    }
  },
  {
    "title": "Tech Sprint - Due Date",
    "type": "date"
  },
  {
    "title": "Tech Sprint - Date Completed",
    "type": "date"
  },
  {
    "title": "Tech Sprint - Sprint Timeline",
    "type": "timeline"
  },
  {
    "title": "Tech Sprint - Files",
    "type": "file"
  },
  {
    "title": "Tech Sprint - Notes",
    "type": "long_text"
  },
  {
    "title": "Tech Sprint - Date Created",
    "type": "date"
  },
  {
    "title": "Tech Sprint - Days To Complete",
    "type": "formula"
  },
  {
    "title": "Tech Sprint - Team",
    "type": "people"
  }
]

const Tech_Bugs = [
  {
    "title": "Tech Bugs - Name",
    "type": "name"
  },
  {
    "title": "Tech Bugs - Person",
    "type": "people"
  },
  {
    "title": "Tech Bugs - Status",
    "type": "status",
    "labels": {
      "14": "In Progress",
      "2": "Escalated",
      "1": "Resolved"
    }
  },
  {
    "title": "Tech Bugs - Priority",
    "type": "status",
    "labels": {
      "2": "High",
      "9": "Medium",
      "3": "Low"
    }
  },
  {
    "title": "Tech Bugs - Bug Type",
    "type": "status"
  },
  {
    "title": "Tech Bugs - Due Date",
    "type": "date"
  },
  {
    "title": "Tech Bugs - Date Completed",
    "type": "date"
  },
  {
    "title": "Tech Bugs - Issue Examples",
    "type": "file"
  },
  {
    "title": "Tech Bugs - Notes",
    "type": "long_text"
  },
  {
    "title": "Tech Bugs - Date Created",
    "type": "date"
  },
  {
    "title": "Tech Bugs - Days To Complete",
    "type": "formula"
  },
  {
    "title": "Tech Bugs - Team",
    "type": "people"
  }
]

const TECH_Requests = [
  {
    "title": "Tech Requests- Name",
    "type": "text"
  },
  {
    "title": "Tech Requests- Owner",
    "type": "people"
  },
  {
    "title": "Tech Requests- Status",
    "type": "status",
    "labels": {
      "109": "In Progress",
      "2": "Delayed",
      "19": "Staging",
      "1": "Completed"
    }
  },
  {
    "title": "Tech Requests- Priority",
    "type": "status",
    "labels": {
      "2": "High",
      "0": "Medium",
      "3": "Low"
    }
  },
  {
    "title": "Tech Requests- Request Type",
    "type": "status",
    "labels": {
      "13": "Landing Page",
      "1": "New Offer",
      "2": "Facebook",
      "3": "Mixpanel",
      "4": "Klaviyo",
      "6": "Ad Words",
      "7": "Social Media",
      "8": "Affiliate/Everflow",
      "9": "A/B Testing",
      "10": "Cloudflare",
      "11": "Analytics",
      "12": "Justuno",
      "13": "Server",
      "14": "Funnel",
      "15": "Other"
    }
  },
  {
    "title": "Tech Requests- Due Date",
    "type": "date"
  },
  {
    "title": "Tech Requests- Launch Date",
    "type": "date"
  },
  {
    "title": "Tech Requests- Date Created",
    "type": "date"
  },
  {
    "title": "Tech Requests- Date Completed",
    "type": "date"
  },
  {
    "title": "Tech Requests- Days To Complete",
    "type": "formula"
  },
  {
    "title": "Tech Requests- Team",
    "type": "people"
  }
]

const TechTDT = [
  {
    "title": "Tech TDT - Name",
    "type": "text"
  },
  {
    "title": "Tech TDT - Person",
    "type": "people"
  },
  {
    "title": "Tech TDT - Status",
    "type": "status",
    "labels": {
      "109": "Active",
      "1": "Completed"
    }
  },
  {
    "title": "Tech TDT - Type Of A/B Test",
    "type": "status",
    "labels": {
      "3": "Website",
      "4": "Offer Funnel",
      "6": "Affiliate Funnel",
      "9": "Other"
    }
  },
  {
    "title": "Tech TDT - Length Of A/B Test",
    "type": "formula"
  },
  {
    "title": "Tech TDT - Live Date",
    "type": "date"
  },
  {
    "title": "Tech TDT - End Date",
    "type": "date"
  },
  {
    "title": "Tech TDT - Audience",
    "type": "status",
    "labels": {
      "7": "Organic / Internal",
      "4": "FB Acquisition",
      "6": "Affiliate Acquisition",
      "8": "Upsell",
      "9": "Downsell",
      "10": "None - New",
      "11": "None - WIP",
      "12": "None"
    }

  },
  {
    "title": "Tech TDT - Product Tested",
    "type": "dropdown"
  },
  {
    "title": "Tech TDT - Funnel Tested",
    "type": "dropdown"
  },
  {
    "title": "Tech TDT - Testing For",
    "type": "status",
    "labels": {
      "7": "Quick Overview",
      "3": "Hypothesis Of Test"
    }

  },
  {
    "title": "Tech TDT - Test Link",
    "type": "text"
  },
  {
    "title": "Tech TDT - Test Success",
    "type": "status",
    "labels": {
      "1": "Yes",
      "2": "No"
    }
  },
  {
    "title": "Tech TDT - Test Winner (Link)",
    "type": "text"
  },
  {
    "title": "Tech TDT - Notes",
    "type": "long_text"
  },
  {
    "title": "Tech TDT - Date Created",
    "type": "date"
  },
  {
    "title": "Tech TDT - Date Completed",
    "type": "date"
  },
  {
    "title": "Tech TDT - Days To Complete",
    "type": "formula"
  },
  {
    "title": "Tech TDT - Team",
    "type": "people"
  }
]

const MKTG_aff = [
  {
    "title": "MKTG Aff - Name",
    "type": "text"  
  },
  {
    "title": "MKTG Aff - Owner",
    "type": "people"
  },
  {
    "title": "MKTG Aff - Status",
    "type": "status",
    "labels": {
      "7": "Prospect / New Submission",
      "8": "Active",
      "105": "Disqualified"
    }
  },
  {
    "title": "MKTG Aff - Affiliate Code",
    "type": "text"
  },
  {
    "title": "MKTG Aff - POC First Name",
    "type": "text"
  },
  {
    "title": "MKTG Aff - POC Last Name",
    "type": "text"
  },
  {
    "title": "MKTG Aff - Company",
    "type": "text"
  },
  {
    "title": "MKTG Aff - POC Email",
    "type": "text"
  },
  {
    "title": "MKTG Aff - Website Link",
    "type": "text"
  },
  {
    "title": "MKTG Aff - Type",
    "type": "status",
    "7": "Affiliate",
    "4": "Influencer"
  },
  {
    "title": "MKTG Aff - Size",
    "type": "status"
  },
  {
    "title": "MKTG Aff - List / IG Size",
    "type": "numbers"
  },
  {
    "title": "MKTG Aff - Notes",
    "type": "long_text"
  },
  {
    "title": "MKTG Aff - Date Created",
    "type": "date"
  },
  {
    "title": "MKTG Aff - Team",
    "type": "people"
  }
]

const MKTG_Aff_Rev = [
  {
    "title": "MKTG Aff Rev - Name",
    "type": "text"
  },
  {
    "title": "MKTG Aff Rev - Gross",
    "type": "numbers"
  },
  {
    "title": "MKTG Aff Rev - Affiliate Spend",
    "type": "numbers"
  },
  {
    "title": "MKTG Aff Rev - Affiliate Revenue",
    "type": "numbers"
  },
  {
    "title": "MKTG Aff Rev - Date Created",
    "type": "date"
  },
  {
    "title": "MKTG Aff Rev - Link to Marketing Hosting",
    "type": "board-relation"
  }
]

const OPS_SPO = [
  {
    "title": "OPS SPO - Name",
    "type": "text"
  },
  {
    "title": "OPS SPO - Person",       
    "type": "people"
  },
  {
    "title": "OPS SPO - Status",       
    "type": "status",
    "labels": {
      "5": "New Request",
      "3": "Order Collected",
      "4": "Sales Order Sent",
      "7": "Order Delivered / Need To Invoice",
      "1": "Completed"
    }
  },
  {
    "title": "OPS SPO - Type",
    "type": "status",
    "labels": {
      "4": "Sales Order",
      "8": "Purchase Order"
    }
  },
  {
    "title": "OPS SPO - Sales / Purchase Order #",
    "type": "text"
  },
  {
    "title": "OPS SPO - Customer",
    "type": "text"
  },
  {
    "title": "OPS SPO - Pick Up Date",
    "type": "date"
  },
  {
    "title": "OPS SPO - ETD",
    "type": "date"
  },
  {
    "title": "OPS SPO - Invoice Amount",
    "type": "numbers"
  },
  {
    "title": "OPS SPO - Invoice Date",
    "type": "date"
  },
  {
    "title": "OPS SPO - Invoice Status",
    "type": "status"
  },
  {
    "title": "OPS SPO - Date Created",
    "type": "date"
  },
  {
    "title": "OPS SPO - Date Completed",
    "type": "date"
  },
  {
    "title": "OPS SPO - Days To Complete",
    "type": "formula"
  },
  {
    "title": "OPS SPO - Team",
    "type": "people"
  }
]

const OPS_WKPI = [
  {
    "title": "OPS WKPI - Name",
    "type": "text"
  },
  {
    "title": "OPS WKPI - Person",
    "type": "people"
  },
  {
    "title": "OPS WKPI - Location",
    "type": "status",
    "labels": {
      "7": "Denver",
      "6": "Phoenix",
      "8": "O.C.",
      "9": "Ohio"
    }
  },
  {
    "title": "OPS WKPI - W/c",
    "type": "date"
  },
  {
    "title": "OPS WKPI - Locals",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Non-Locals",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Mis-packs",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Rate Of Mispacks",
    "type": "formula"
  },
  {
    "title": "OPS WKPI - Dry Ice (End Of Week)",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Forced UPS",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Driver Hours",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Stops/Hour",
    "type": "formula"
  },
  {
    "title": "OPS WKPI - PQI (Total Units)",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Overtime Hours",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Budgets",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Packers",
    "type": "formula"
  },
  {
    "title": "OPS WKPI - Expected Output",
    "type": "formula"
  },
  {
    "title": "OPS WKPI - Units",
    "type": "numbers"
  },
  {
    "title": "OPS WKPI - Date Created",
    "type": "date"
  }
]

const OPS_LCR = [
  {
    "title": "OPS LCR - Name",
    "type": "text"
  },
  {
    "title": "OPS LCR - Person",
    "type": "people"
  },
  {
    "title": "OPS LCR - Status",
    "type": "status"
  },
  {
    "title": "OPS LCR - Request Type",
    "type": "status"
  },
  {
    "title": "OPS LCR - Requester",
    "type": "text"
  },
  {
    "title": "OPS LCR - Requester Email",
    "type": "text"
  },
  {
    "title": "OPS LCR - Contract",
    "type": "files"
  },
  {
    "title": "OPS LCR - Date Created",
    "type": "date"
  },
  {
    "title": "OPS LCR - Date Request Completed",
    "type": "date"
  },
  {
    "title": "OPS LCR - Days To Complete",
    "type": "formula"
  },
  {
    "title": "OPS LCR - Team",
    "type": "people"
  }
]

const OPS_LVA = [
  {
    "title": "OPS LCA - Name",
    "type": "text"
  },
  {
    "title": "OPS LCA - Person",
    "type": "people"
  },
  {
    "title": "OPS LCA - Contract Status",
    "type": "status",
    "labels": {
      "5": "New Agreement",
      "3": "Negotiation",
      "2": "Termination",
      "1": "Active",
      "14": "Expired"
    }
  },
  {
    "title": "OPS LCA - Contract Type",
    "type": "status",
    "labels": {
      "7": "Lease",
      "8": "Contract"
    }

  },
  {
    "title": "OPS LCA - Termination Deadline",
    "type": "date"
  },
  {
    "title": "OPS LCA - Contract Start Date",
    "type": "date"
  },
  {
    "title": "OPS LCA - Negotiation Date",
    "type": "date"
  },
  {
    "title": "OPS LCA - Renewal Option Deadline",
    "type": "date"
  },
  {
    "title": "OPS LCA - Expiration Date",
    "type": "date"
  },
  {
    "title": "OPS LCA - Lease Review",
    "type": "date"
  },
  {
    "title": "OPS LCA - Security Deposit",
    "type": "numbers"
  },
  {
    "title": "OPS LCA - Terms",
    "type": "status",
    "labels": {
      "3": "Hold",
      "4": "Assigned",
      "7": "12 Months",
      "6": "24 Months",
      "8": "36 Months",
      "9": "48 Months",
      "10": "60 Months"
    }
  },
  {
    "title": "OPS LCA - Comments",
    "type": "long_text"
  },
  {
    "title": "OPS LCA - Date Created",
    "type": "date"
  },
  {
    "title": "OPS LCA - Team",
    "type": "people"
  }
]

const OPS_LCA = [
  {
    "title": "OPS Recruit - Name",
    "type": "text"
  },
  {
    "title": "OPS Recruit - Person",
    "type": "people"
  },
  {
    "title": "OPS Recruit - Application Date",
    "type": "date"
  },
  {
    "title": "OPS Recruit - Status",
    "type": "status",
    "labels": {
      "5": "New Application",
      "14": "Stage 1",
      "19": "Stage 2",
      "2": "Ququalified",
      "1": "Hired"
    }
  },
  {
    "title": "OPS Recruit - Applied For",
    "type": "text"
  },
  {
    "title": "OPS Recruit - First Name",
    "type": "text"
  },
  {
    "title": "OPS Recruit - Last Name",
    "type": "text"
  },
  {
    "title": "OPS Recruit - Email",
    "type": "text"
  },
  {
    "title": "OPS Recruit - Phone No.",
    "type": "text"
  },
  {
    "title": "OPS Recruit - CV Link",
    "type": "text"
  },
  {
    "title": "OPS Recruit - Candidate Notes",
    "type": "long_text"
  },
  {
    "title": "OPS Recruit - Source",
    "type": "status",
    "labels": {
      "7": "LinkedIn",
      "6": "Website",
      "8": "Indeed"
    }
  },
  {
    "title": "OPS Recruit - Date Closed",
    "type": "date"
  },
  {
    "title": "OPS Recruit - Days To Complete",
    "type": "formula"
  },
  {
    "title": "OPS Recruit - Team",
    "type": "people"
  }
]

const OPS_Onboard = [
  {
    "title": "OPS Onboard - Name",
    "type": "text"
  },
  {
    "title": "OPS Onboard - Person",
    "type": "people"
  },
  {
    "title": "OPS Onboard - Status",
    "type": "status",
    "labels": {
      "8": "Onboarding",
      "1": "Active",
      "2": "Offboarding",
      "10": "Offboarded"
    }
  },
  {
    "title": "OPS Onboard - Employee Start Date",
    "type": "date"
  },
  {
    "title": "OPS Onboard - First Name",
    "type": "text"
  },
  {
    "title": "OPS Onboard - Last Name",
    "type": "text"
  },
  {
    "title": "OPS Onboard - Email",
    "type": "text"
  },
  {
    "title": "OPS Onboard - Phone Number",
    "type": "text"
  },
  {
    "title": "OPS Onboard - Contract",
    "type": "file"
  },
  {
    "title": "OPS Onboard - CV Link",
    "type": "file"
  },
  {
    "title": "OPS Onboard - Notes",
    "type": "long_text"
  },
  {
    "title": "OPS Onboard - Background Check Passed",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    }
  },
  {
    "title": "OPS Onboard - Make Offer - Get Acceptance",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Assign Team Onboarding Tasks",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Set Start Date",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Setup On Gusto (Payroll)",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Send Welcome Letter via Gusto - This will also handle the W-4 and I-9",       
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Set Time For Onboarding First Call",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Create Email Account",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Copy Of ID & SS // US Passport",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - W9 (if contractor)",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - NDA",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Keeper",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Slack (Invite To Relevant Channels",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Monday Access",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Team Tasks Board In Monday",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Google Drive & Dropbox",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Expression Engine",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - ShipStation",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Canva",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Groove",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Facebook Ads Manager",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Google Ads Account",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - ClickBank",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Everflow",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Click Funnels",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Convert",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Klaviyo",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - JustUno",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Libsyn",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Talkable",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Wistia",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Vimeo",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Send Welcome Gift Box",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Create Onboarding Schedule",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Send Onboarding Packet",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Assign Peer Mentor",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Setup Meeting w/ Team Members",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Agency Intros",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Company Calendar",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Team & Department Meetings",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Google Analytics",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Sunken Stone Platform",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Employee Coupon Code",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Abacus",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Employee Handbook Distributed",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Work Comp",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Employee Calendar Monday",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Bill.com",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Ramp",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Standing Team Meeting Invite",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Call w/Founder",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Call w/Team",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Call w/Operations",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Vocabulary",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Radiate In 28 Access",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Branding Guide",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Monday.com Training",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Slack Training",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Google Drive Training",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - SOPs Training",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Tracker Training",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Avatar Training",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Niche Training",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Agency Relationships",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Expectations Call",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Invite To Relevant Slack Channels",
    "type": "status",
    "labels": {
      "0": "Pending",
      "1": "Complete",
      "2": "Removed",
      "10": "Not Required"
    } 
  },
  {
    "title": "OPS Onboard - Date Created",
    "type": "date"
  },
  {
    "title": "OPS Onboard - Team",
    "type": "people"
  }
]

const dates = [
  { title: 'Date 1', type: 'date' },
  { title: 'Date 2', type: 'date' },
  { title: 'Date 3', type: 'date' },
  { title: 'Date 4', type: 'date' },
  { title: 'Date 5', type: 'date' },
  { title: 'Date 6', type: 'date' },
  { title: 'Date 7', type: 'date' },
  { title: 'Date 8', type: 'date' },
  { title: 'Date 9', type: 'date' },
  { title: 'Date 10', type: 'date' },
  { title: 'Date 11', type: 'date' },
  { title: 'Date 12', type: 'date' },
  { title: 'Date 13', type: 'date' },
  { title: 'Date 14', type: 'date' },
  { title: 'Date 15', type: 'date' },
  { title: 'Date 16', type: 'date' },
  { title: 'Date 17', type: 'date' },
  { title: 'Date 18', type: 'date' },
  { title: 'Date 19', type: 'date' },
  { title: 'Date 20', type: 'date' },
  { title: 'Date 21', type: 'date' },
  { title: 'Date 22', type: 'date' },
  { title: 'Date 23', type: 'date' },
  { title: 'Date 24', type: 'date' }
]

const data = [
  {
    "title": ""
  }
]
module.exports = {data};
