/* ============================================================
   Kutumb Samaj — Community Platform Prototype Engine
   Shared across all three visual concepts. Renders all 47
   screens from the sitemap as client-side "views" with hash
   routing, so the whole thing is one clickable prototype.
   ============================================================ */

/* ---------- Icons (24x24, stroke, currentColor) ---------- */
const ICONS = {
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M15.5 14c2.8.3 5 2.3 5.5 5.4"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
  bell: '<path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6.5H4c.5-1 2-2.5 2-6.5z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  image: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="8.5" cy="10" r="1.7"/><path d="M4 17l5-5 4 4 3-3 4 4"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M4 6.5l8 6.5 8-6.5"/>',
  phone: '<path d="M6 3.5c.6 1.7 1.3 3.2 2.2 4.5-1 1-1.4 1.7-1.1 2.4 1 2.3 3.2 4.5 5.5 5.5.7.3 1.4-.1 2.4-1.1 1.3.9 2.8 1.6 4.5 2.2v3c0 1.1-1 2-2.2 1.8C10.4 20.8 3.2 13.6 2.2 6.7 2 5.5 2.9 4.5 4 4.5h2z"/>',
  mapPin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-5-5"/>',
  plus: '<path d="M12 4v16M4 12h16"/>',
  edit: '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L4.5 17z"/><path d="M14.5 6.5l3 3"/>',
  trash: '<path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/>',
  chevronRight: '<path d="M9 5l7 7-7 7"/>',
  check: '<path d="M4 12.5l5 5L20 6"/>',
  x: '<path d="M5 5l14 14M19 5L5 19"/>',
  logout: '<path d="M13 4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5M9 8l-4 4 4 4M5 12h13"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M4.2 12a7.8 7.8 0 0 1 .3-2.1l-1.6-1.3 1.5-2.6 1.9.7a7.8 7.8 0 0 1 1.8-1.1L8.4 3h3l.3 2.6a7.8 7.8 0 0 1 1.8 1.1l1.9-.7 1.5 2.6-1.6 1.3c.2.7.3 1.4.3 2.1s-.1 1.4-.3 2.1l1.6 1.3-1.5 2.6-1.9-.7a7.8 7.8 0 0 1-1.8 1.1L11.4 21h-3l-.3-2.6a7.8 7.8 0 0 1-1.8-1.1l-1.9.7-1.5-2.6 1.6-1.3A7.8 7.8 0 0 1 4.2 12z"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
  grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.2"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.2"/>',
  menu: '<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',
  star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.9z"/>',
  arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  upload: '<path d="M12 16V5M8 9l4-4 4 4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  download: '<path d="M12 4v11M8 11l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.5v.01"/>',
  monitor: '<rect x="3" y="4.5" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16.5V20"/>',
  smartphone: '<rect x="7" y="2.5" width="10" height="19" rx="1.8"/><path d="M11 18.5h2"/>',
};
function icon(name, size) {
  size = size || 18;
  return '<svg class="icon" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
}

/* ---------- Sample data (shared "admin-entered" content) ---------- */
const MEMBERS = [
  { id: 'm1', name: 'Rajesh Patel', village: 'Anandpur', city: 'Surat', role: 'Member', tier: 'Registered' },
  { id: 'm2', name: 'Kavita Patel', village: 'Ratanpur', city: 'Ahmedabad', role: 'Member', tier: 'Verified' },
  { id: 'm3', name: 'Nileshbhai Patel', village: 'Shantigram', city: 'Vadodara', role: 'Treasurer', tier: 'Committee' },
  { id: 'm4', name: 'Priya Patel', village: 'Anandpur', city: 'Rajkot', role: 'Member', tier: 'Registered' },
  { id: 'm5', name: 'Mahesh Patel', village: 'Devpur', city: 'Surat', role: 'Member', tier: 'Verified' },
  { id: 'm6', name: 'Sonal Patel', village: 'Ratanpur', city: 'Ahmedabad', role: 'Member', tier: 'Registered' },
  { id: 'm7', name: 'Ashokbhai Patel', village: 'Shantigram', city: 'Baroda', role: 'Secretary', tier: 'Committee' },
  { id: 'm8', name: 'Deepa Patel', village: 'Devpur', city: 'Anand', role: 'Member', tier: 'Verified' },
];
const EVENTS = [
  { id: 'e1', title: 'Diwali Dinner & Cultural Program', date: 'Nov 8, 2026', venue: 'Grand Banquet Hall', desc: 'Our biggest night of the year — a full Gujarati thali dinner, a dance program from the youth group, and the annual lighting ceremony. Bring the whole family.' },
  { id: 'e2', title: 'Annual General Body Meeting', date: 'Oct 18, 2026', venue: 'Community Center, Hall B', desc: "Yearly update on the Samaj's finances and activities, followed by open questions from members. All registered members are welcome to attend." },
  { id: 'e3', title: 'Navratri Garba Night', date: 'Oct 3, 2026', venue: 'Riverside Grounds', desc: 'Live dhol and garba music for nine nights of dancing. Traditional dress encouraged. Food stalls run by our youth committee.' },
  { id: 'e4', title: 'Youth Talent Showcase', date: 'Dec 6, 2026', venue: 'Community Center', desc: 'An evening organized by and for our younger members — music, dance, comedy, and a bit of friendly competition.' },
  { id: 'e5', title: "Senior Citizens' Satsang", date: 'Sep 20, 2026', venue: 'Community Hall', desc: 'A quiet afternoon of devotional singing and tea, especially for our senior members.' },
  { id: 'e6', title: 'New Year Family Picnic', date: 'Jan 3, 2027', venue: 'Lakeside Park', desc: 'Games, food, and a fresh start together as a community.' },
];
const ANNOUNCEMENTS = [
  { id: 'a1', title: '2027 membership renewal is now open', date: 'Sep 22, 2026', excerpt: 'Renew before December 31 to keep your directory listing active and avoid a late fee.' },
  { id: 'a2', title: 'New committee elected for the 2026–28 term', date: 'Sep 15, 2026', excerpt: 'Congratulations to our incoming President, Secretary, and Treasurer — see the Committee page for the full list.' },
  { id: 'a3', title: 'Printed directory booklets available for pickup', date: 'Sep 5, 2026', excerpt: 'This year’s printed Vasti booklet is ready. Collect yours at the Diwali Dinner or request home delivery.' },
  { id: 'a4', title: 'Scholarship applications open for students', date: 'Aug 28, 2026', excerpt: 'Members’ children in college can apply for this year’s community scholarship fund through October 15.' },
  { id: 'a5', title: 'Parking changes for the Diwali Dinner', date: 'Aug 20, 2026', excerpt: 'Overflow parking will be at the school lot next door — shuttle runs every 15 minutes from 5pm.' },
];
const COMMITTEE = [
  { id: 'c1', name: 'Ashokbhai Patel', title: 'President', village: 'Shantigram' },
  { id: 'c2', name: 'Kavita Patel', title: 'Vice President', village: 'Ratanpur' },
  { id: 'c3', name: 'Ashokbhai Patel', title: 'Secretary', village: 'Shantigram' },
  { id: 'c4', name: 'Nileshbhai Patel', title: 'Treasurer', village: 'Shantigram' },
  { id: 'c5', name: 'Deepa Patel', title: 'Cultural Coordinator', village: 'Devpur' },
  { id: 'c6', name: 'Rajesh Patel', title: 'Youth Coordinator', village: 'Anandpur' },
];
const GALLERY = [
  { id: 'g1', caption: 'Diwali Dinner 2025', count: 84 },
  { id: 'g2', caption: 'Navratri Garba 2025', count: 132 },
  { id: 'g3', caption: 'Annual General Meeting 2025', count: 26 },
  { id: 'g4', caption: 'Youth Talent Showcase 2025', count: 57 },
  { id: 'g5', caption: 'New Year Picnic 2025', count: 69 },
  { id: 'g6', caption: "Senior Citizens' Satsang", count: 18 },
];
const FAQ = [
  { q: 'Who can become a member?', a: 'Anyone with family roots in our community, and their immediate family, can apply. Fill out the registration form with your family details — an admin reviews every application, usually within a few days.' },
  { q: 'How do I update my profile or add a family member?', a: 'Log in and go to My Profile or Family Members from your dashboard. Some changes (like your name) may need admin re-verification, which keeps the directory accurate for everyone.' },
  { q: 'Who can see my contact information?', a: 'You control this. By default your name, photo, and village are public; your phone and email are visible to logged-in members only, and more sensitive details are visible only to Verified Members. You can adjust this any time in Settings.' },
  { q: 'How do I RSVP to an event?', a: 'Open the event from the Events page and select RSVP. You’ll see your confirmed events on your dashboard.' },
  { q: 'My registration is still pending — how long does approval take?', a: 'Most applications are reviewed within 3–5 days. You’ll get an email as soon as a decision is made.' },
];
const PENDING_APPLICATIONS = [
  { id: 'p1', name: 'Vikram Patel', submitted: '2 days ago' },
  { id: 'p2', name: 'Anjali Patel', submitted: '4 days ago' },
  { id: 'p3', name: 'Suresh Patel', submitted: '6 days ago' },
];
const ACTIVITY_LOG = [
  { who: 'Ashokbhai Patel (Admin)', what: 'approved a new member application', when: '2 hours ago' },
  { who: 'Kavita Patel (Admin)', what: 'published the Diwali Dinner event', when: '5 hours ago' },
  { who: 'Nileshbhai Patel (Admin)', what: 'updated the homepage banner', when: 'Yesterday' },
  { who: 'System', what: 'sent 214 renewal reminder emails', when: '2 days ago' },
  { who: 'Ashokbhai Patel (Admin)', what: 'rejected a duplicate member application', when: '3 days ago' },
];
const CONTACT_MESSAGES = [
  { id: 'cm1', name: 'Ramesh Patel', subject: 'Question about renewing membership', status: 'Unread', when: 'Today' },
  { id: 'cm2', name: 'Falguni Patel', subject: 'Can we rent the hall for a birthday?', status: 'Replied', when: 'Yesterday' },
  { id: 'cm3', name: 'Unknown', subject: 'buy cheap watches now', status: 'Spam', when: '3 days ago' },
  { id: 'cm4', name: 'Jignesh Patel', subject: "Update to my father's directory listing", status: 'Resolved', when: '5 days ago' },
];
const ORG = { name: 'Kutumb Samaj', tagline: 'A home for our community, wherever we’ve settled', address: '123 Community Lane, Your City', phone: '(000) 000-0000', email: 'info@kutumbsamaj.org' };

/* ---------- small render helpers ---------- */
function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
}
function avatar(name, size) {
  size = size || 44;
  var idx = 0; for (var i = 0; i < name.length; i++) idx += name.charCodeAt(i);
  idx = idx % 6;
  return '<div class="avatar avatar-c' + idx + '" style="width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.38) + 'px">' + initials(name) + '</div>';
}
function badge(text, kind) {
  return '<span class="badge badge-' + (kind || 'neutral') + '">' + text + '</span>';
}
function btn(label, opts) {
  opts = opts || {};
  var variant = opts.variant || 'ghost';
  var attrs = opts.goto ? ' data-goto="' + opts.goto + '"' : '';
  if (opts.submitGoto) attrs += ' data-submit-goto="' + opts.submitGoto + '"';
  var ic = opts.icon ? icon(opts.icon, 16) : '';
  return '<button type="' + (opts.type || 'button') + '" class="btn btn-' + variant + (opts.small ? ' btn-small' : '') + '"' + attrs + '>' + ic + '<span>' + label + '</span></button>';
}
function field(label, opts) {
  opts = opts || {};
  var tag = opts.textarea ? 'textarea' : 'input';
  var attrsExtra = opts.textarea ? ' rows="4"' : ' type="' + (opts.type || 'text') + '"';
  var input = '<' + tag + ' id="f-' + Math.random().toString(36).slice(2, 8) + '" placeholder="' + (opts.placeholder || '') + '"' + attrsExtra + (opts.value ? ' value="' + opts.value + '"' : '') + '></' + tag + '>';
  if (opts.textarea && opts.value) input = '<textarea rows="4">' + opts.value + '</textarea>';
  return '<label class="field"><span>' + label + '</span>' + input + '</label>';
}
function toggleRow(label, on) {
  return '<label class="toggle-row"><span>' + label + '</span><span class="switch ' + (on ? 'on' : '') + '"><span class="knob"></span></span></label>';
}
function section(title, inner, opts) {
  opts = opts || {};
  return '<div class="section">' + (title ? '<div class="section-head"><h3>' + title + '</h3>' + (opts.action || '') + '</div>' : '') + inner + '</div>';
}

/* ---------- app-style mobile components (greeting header, status card, quick actions) ---------- */
function iconSquare(name, tint) {
  return '<span class="icon-square icon-square--' + (tint || 'a') + '">' + icon(name, 20) + '</span>';
}
function quickActionRow(iconName, title, desc, tint, opts) {
  opts = opts || {};
  return '<div class="quick-action-row"' + (opts.goto ? ' data-goto="' + opts.goto + '"' : '') + '>' +
    iconSquare(iconName, tint) +
    '<div class="qa-text"><h4>' + title + '</h4><p class="muted small">' + desc + '</p></div>' +
    '<span class="round-btn round-btn--' + (tint || 'a') + '">' + icon(opts.icon || 'plus', 15) + '</span>' +
  '</div>';
}
function iconListRow(iconName, title, sub, meta, opts) {
  opts = opts || {};
  return '<div class="icon-list-row"' + (opts.goto ? ' data-goto="' + opts.goto + '"' : '') + '>' +
    iconSquare(iconName, opts.tint || 'a') +
    '<div class="ilr-text"><h4>' + title + '</h4><p class="muted small">' + sub + '</p></div>' +
    (meta ? '<span class="muted small ilr-meta">' + meta + '</span>' : '') +
  '</div>';
}
function greetingHeader(eyebrow, mainText, subText, personName) {
  return '<div class="mobile-greeting">' +
    '<div class="mg-text"><p class="mg-eyebrow">' + eyebrow + '</p><h1>' + mainText + '</h1>' + (subText ? '<p class="muted">' + subText + '</p>' : '') + '</div>' +
    (personName ? avatar(personName, 52) : '<span class="mg-icon">' + icon('home', 24) + '</span>') +
  '</div>';
}
function statusHeroCard(label, value, sub, opts) {
  opts = opts || {};
  return '<div class="mobile-status-card"' + (opts.goto ? ' data-goto="' + opts.goto + '"' : '') + '>' +
    '<div class="msc-top"><span class="msc-label">' + label + '</span>' + (opts.dot ? '<span class="msc-dot msc-dot--' + opts.dot + '"></span>' : '') + '</div>' +
    '<h2>' + value + '</h2>' +
    (sub ? '<p class="msc-sub">' + sub + '</p>' : '') +
  '</div>';
}

/* ---------- navigation model ---------- */
var PUBLIC_NAV = [
  ['Home', 'PUB-01'], ['About', 'PUB-02'], ['Directory', 'PUB-06'], ['Events', 'PUB-08'],
  ['Announcements', 'PUB-10'], ['Gallery', 'PUB-11'], ['Committee', 'PUB-05'], ['Contact', 'PUB-12'],
];
var MEMBER_NAV = [
  ['Dashboard', 'MEM-01', 'home'], ['My Profile', 'MEM-02', 'users'], ['Family Members', 'MEM-04', 'users'],
  ['Events', 'MEM-05', 'calendar'], ['Announcements', 'MEM-06', 'bell'], ['Directory', 'MEM-07', 'search'],
  ['Notifications', 'MEM-08', 'bell'], ['Settings', 'MEM-09', 'settings'],
];
var ADMIN_NAV = [
  ['Dashboard', 'ADM-01', 'grid'], ['Members', 'ADM-02', 'users'], ['Family', 'ADM-05', 'users'],
  ['Committee', 'ADM-06', 'shield'], ['Events', 'ADM-07', 'calendar'], ['Announcements', 'ADM-09', 'bell'],
  ['Gallery', 'ADM-14', 'image'], ['Contact Messages', 'ADM-12', 'mail'], ['Homepage Content', 'ADM-13', 'edit'],
  ['Admin Users', 'ADM-15', 'shield'], ['Roles & Permissions', 'ADM-16', 'shield'], ['Settings', 'ADM-17', 'settings'],
  ['Activity Log', 'ADM-18', 'clock'],
];

function navLink(label, id, active) {
  return '<a href="#' + id + '" class="nav-link' + (active ? ' active' : '') + '" data-goto="' + id + '">' + label + '</a>';
}
function sidebarLink(label, id, iconName, active) {
  return '<a href="#' + id + '" class="sidebar-link' + (active ? ' active' : '') + '" data-goto="' + id + '">' + icon(iconName, 17) + '<span>' + label + '</span></a>';
}
function bottomTabBar(items, activeId) {
  var linksHtml = items.map(function (it) {
    var active = it[1] === activeId;
    return '<a href="#' + it[1] + '" class="tab-bar-link' + (active ? ' active' : '') + '" data-goto="' + it[1] + '">' + icon(it[2], 21) + '<span>' + it[0] + '</span></a>';
  }).join('');
  return '<nav class="bottom-tab-bar">' + linksHtml +
    '<button type="button" class="tab-bar-link tab-bar-link--more" data-menu-toggle>' + icon('menu', 21) + '<span>More</span></button>' +
  '</nav>';
}

/* ---------- shells ---------- */
function publicShell(activeId, inner) {
  var links = PUBLIC_NAV.map(function (n) { return navLink(n[0], n[1], n[1] === activeId); }).join('');
  var bottomItems = [['Home', 'PUB-01', 'home'], ['Directory', 'PUB-06', 'search'], ['Events', 'PUB-08', 'calendar'], ['News', 'PUB-10', 'bell']];
  return '' +
    '<header class="site-header">' +
      '<div class="brand" data-goto="PUB-01">' + icon('home', 22) + '<span>' + ORG.name + '</span></div>' +
      '<nav class="nav-links">' + links + '</nav>' +
      '<div class="header-actions">' +
        btn('Login', { goto: 'AUTH-01', small: true }) +
        btn('Register', { variant: 'primary', goto: 'AUTH-02', small: true }) +
      '</div>' +
    '</header>' +
    '<div class="mobile-drawer" data-drawer>' +
      '<button type="button" class="drawer-close" data-drawer-close aria-label="Close menu">' + icon('x', 18) + '</button>' +
      links +
      '<div class="drawer-actions">' + btn('Login', { goto: 'AUTH-01' }) + btn('Register', { variant: 'primary', goto: 'AUTH-02' }) + '</div>' +
    '</div>' +
    '<main class="page">' + inner + '</main>' +
    publicFooter() +
    bottomTabBar(bottomItems, activeId);
}
function publicFooter() {
  return '<footer class="site-footer">' +
    '<div class="footer-grid">' +
      '<div><div class="brand">' + icon('home', 20) + '<span>' + ORG.name + '</span></div><p>' + ORG.tagline + '</p></div>' +
      '<div><h4>Explore</h4>' + PUBLIC_NAV.slice(0, 5).map(function (n) { return '<a data-goto="' + n[1] + '">' + n[0] + '</a>'; }).join('') + '</div>' +
      '<div><h4>Legal</h4><a data-goto="PUB-13">FAQ</a><a data-goto="PUB-14">Privacy Policy</a><a data-goto="PUB-15">Terms & Conditions</a></div>' +
      '<div><h4>Contact</h4><p>' + ORG.address + '</p><p>' + ORG.phone + '</p><p>' + ORG.email + '</p></div>' +
    '</div>' +
    '<div class="footer-bottom">© 2026 ' + ORG.name + '. Prototype content for design review only.</div>' +
  '</footer>';
}
function authShell(inner) {
  return '<div class="auth-page">' +
    '<div class="auth-topbar" data-goto="PUB-01">' + icon('home', 20) + '<span>' + ORG.name + '</span></div>' +
    '<div class="auth-card">' + inner + '</div>' +
  '</div>';
}
function memberShell(activeId, inner) {
  var links = MEMBER_NAV.map(function (n) { return sidebarLink(n[0], n[1], n[2], n[1] === activeId); }).join('');
  var bottomItems = [['Home', 'MEM-01', 'home'], ['Events', 'MEM-05', 'calendar'], ['Directory', 'MEM-07', 'search'], ['Alerts', 'MEM-08', 'bell']];
  return sideShell(links, inner, 'Member Area', 'Priya Patel', 'MEM-01', false, bottomItems, activeId);
}
function adminShell(activeId, inner) {
  var links = ADMIN_NAV.map(function (n) { return sidebarLink(n[0], n[1], n[2], n[1] === activeId); }).join('');
  var bottomItems = [['Home', 'ADM-01', 'grid'], ['Members', 'ADM-02', 'users'], ['Events', 'ADM-07', 'calendar'], ['Approve', 'ADM-04', 'bell']];
  return sideShell(links, inner, 'Admin Panel', 'Ashokbhai Patel', 'ADM-01', true, bottomItems, activeId);
}
function sideShell(links, inner, label, userName, homeId, isAdmin, bottomItems, activeId) {
  return '' +
    '<div class="side-shell">' +
      '<aside class="sidebar" data-drawer>' +
        '<button type="button" class="drawer-close" data-drawer-close aria-label="Close menu">' + icon('x', 18) + '</button>' +
        '<div class="brand" data-goto="' + homeId + '">' + icon('home', 20) + '<span>' + ORG.name + '</span></div>' +
        '<div class="sidebar-tag">' + label + '</div>' +
        '<nav class="sidebar-nav">' + links + '</nav>' +
        '<a class="sidebar-link" data-goto="PUB-01">' + icon('logout', 17) + '<span>Exit to public site</span></a>' +
      '</aside>' +
      '<div class="side-main">' +
        '<div class="topbar">' +
          '<div class="brand topbar-brand" data-goto="' + homeId + '">' + icon('home', 19) + '<span>' + ORG.name + '</span></div>' +
          '<div class="topbar-search"><input placeholder="Search…"/></div>' +
          '<button class="icon-btn" data-goto="' + (isAdmin ? 'ADM-01' : 'MEM-08') + '">' + icon('bell', 19) + '</button>' +
          '<div class="topbar-user" data-goto="' + (isAdmin ? 'ADM-17' : 'MEM-02') + '">' + avatar(userName, 32) + '<span>' + userName + '</span></div>' +
        '</div>' +
        '<main class="page">' + inner + '</main>' +
      '</div>' +
    '</div>' +
    bottomTabBar(bottomItems, activeId);
}

/* ---------- template renderers ---------- */
function renderHome() {
  var upcoming = EVENTS.slice(0, 3), latest = ANNOUNCEMENTS.slice(0, 3), gallery = GALLERY.slice(0, 4), committee = COMMITTEE.slice(0, 4);
  return publicShell('PUB-01', '' +
    '<div class="mobile-home-head">' +
      greetingHeader('SATURDAY · SEP 26', 'Welcome, Guest', 'Here’s what’s new in the community.') +
      statusHeroCard('COMMUNITY PULSE', '2,657 Members', '22 villages · 40+ years strong', { dot: 'good', goto: 'PUB-06' }) +
      section('Quick Actions', '' +
        quickActionRow('users', 'Join the Samaj', 'Apply for membership in minutes', 'a', { goto: 'AUTH-02' }) +
        quickActionRow('search', 'Browse Directory', 'Find family by name or village', 'b', { goto: 'PUB-06' }) +
        quickActionRow('calendar', 'Upcoming Events', 'See what’s happening this month', 'c', { goto: 'PUB-08' })
      ) +
    '</div>' +
    '<div class="desktop-only-hero">' +
      '<section class="hero">' +
        '<p class="eyebrow">Est. community, forever family</p>' +
        '<h1>' + ORG.tagline + '</h1>' +
        '<p class="hero-sub">Find family, keep up with events, and stay connected to the community that raised us — from anywhere in the world.</p>' +
        '<div class="hero-actions">' + btn('Join the Samaj', { variant: 'primary', goto: 'AUTH-02' }) + btn('Browse the Directory', { goto: 'PUB-06' }) + '</div>' +
      '</section>' +
      '<div class="stat-bar">' +
        '<div class="stat-item"><b>1,146</b><span>Families</span></div>' +
        '<div class="stat-item"><b>2,657</b><span>Members</span></div>' +
        '<div class="stat-item"><b>22</b><span>Villages</span></div>' +
        '<div class="stat-item"><b>40+</b><span>Years strong</span></div>' +
      '</div>' +
    '</div>' +
    section('Upcoming Events', '<div class="card-grid">' + upcoming.map(function (e) {
      return '<article class="mini-card" data-goto="PUB-09">' +
        '<div class="mini-card-img mini-card-img--events">' + icon('calendar', 26) + '</div>' +
        '<h4>' + e.title + '</h4><p class="muted">' + e.date + ' · ' + e.venue + '</p>' +
      '</article>';
    }).join('') + '</div>', { action: btn('See all', { goto: 'PUB-08', small: true, icon: 'chevronRight' }) }) +
    section('Latest Announcements', '<div class="list-plain">' + latest.map(function (a) {
      return iconListRow('bell', a.title, a.excerpt, a.date, { goto: 'PUB-10', tint: 'a' });
    }).join('') + '</div>', { action: btn('See all', { goto: 'PUB-10', small: true, icon: 'chevronRight' }) }) +
    section('From the Gallery', '<div class="card-grid card-grid--4">' + gallery.map(function (g) {
      return '<article class="mini-card" data-goto="PUB-11"><div class="mini-card-img mini-card-img--gallery">' + icon('image', 24) + '</div><h4 class="small">' + g.caption + '</h4></article>';
    }).join('') + '</div>', { action: btn('View gallery', { goto: 'PUB-11', small: true, icon: 'chevronRight' }) }) +
    section('Meet the Committee', '<div class="card-grid card-grid--4">' + committee.map(function (c) {
      return '<article class="mini-card mini-card--person" data-goto="PUB-05">' + avatar(c.name, 56) + '<h4 class="small">' + c.name + '</h4><p class="muted small">' + c.title + '</p></article>';
    }).join('') + '</div>')
  );
}

function contentBody(id) {
  var pages = {
    'PUB-02': { title: 'About Us', body: [
      ORG.name + ' was founded by a small group of families who wanted to keep our community’s traditions, language, and mutual support alive after settling far from home. What began as informal gatherings in living rooms has grown into an organization that today connects families across generations — helping newcomers find their footing, celebrating festivals together, and making sure no member of our community ever feels alone.',
      'We’re run entirely by volunteers: a rotating committee elected every two years, and dozens of members who give their time to organize events, maintain the directory, and look after the people who came before us. Membership is open to anyone who traces their roots to our community, wherever they live now.',
    ]},
    'PUB-03': { title: 'Our History', body: [
      'Our story starts in the early 1980s, when a handful of families began meeting for Diwali and Navratri in each other’s homes. As more families arrived, those gatherings outgrew living rooms and moved into rented halls — and in time, into a community of our own.',
      'Over four decades we’ve grown from a handful of families to over a thousand, built a scholarship fund for our students, and in 2019 digitized our member directory so families could stay connected no matter where life took them.',
    ]},
    'PUB-04': { title: 'Mission & Vision', body: [
      'Mission: To preserve our shared heritage, support every family in our community, and build a bridge between the generation that came before us and the one still finding its way.',
      'Vision: A community that stays connected regardless of distance — where every member can find family, ask for help, and celebrate together, whether they live down the street or across the world.',
    ]},
    'PUB-14': { title: 'Privacy Policy', body: [
      'This page explains what member information we collect, how it’s used, and who can see it. Public visitors can see a member’s name, photo, and village. Logged-in members can see additional contact details. Verified members can see more, and only admins can see sensitive account information — see the Privacy Levels reference for the full breakdown.',
      'Placeholder policy text for this prototype — final wording should be reviewed by legal counsel before launch.',
    ]},
    'PUB-15': { title: 'Terms & Conditions', body: [
      'These terms govern your use of the ' + ORG.name + ' member platform, including registration, the member directory, and event RSVPs.',
      'Placeholder terms text for this prototype — final wording should be reviewed by legal counsel before launch.',
    ]},
  };
  return pages[id];
}

function renderContent(id) {
  if (id === 'PUB-13') return renderFAQ();
  var p = contentBody(id);
  return publicShell(id, '' +
    '<div class="content-page">' +
      '<h1>' + p.title + '</h1>' +
      p.body.map(function (t) { return '<p>' + t + '</p>'; }).join('') +
    '</div>'
  );
}
function renderFAQ() {
  return publicShell('PUB-13', '' +
    '<div class="content-page">' +
      '<h1>Frequently Asked Questions</h1>' +
      '<div class="faq-list">' + FAQ.map(function (f) {
        return '<details class="faq-item"><summary>' + f.q + '</summary><p>' + f.a + '</p></details>';
      }).join('') + '</div>' +
    '</div>'
  );
}

function renderListing(id) {
  var cfg = {
    'PUB-05': { title: 'Committee', sub: 'The volunteers who run ' + ORG.name + '.', kind: 'committee' },
    'PUB-06': { title: 'Member Directory', sub: '1,146 families, searchable by name, village, or city.', kind: 'members' },
    'PUB-08': { title: 'Events', sub: 'Everything happening in the community, upcoming and past.', kind: 'events' },
    'PUB-10': { title: 'Announcements', sub: 'News and updates from the committee.', kind: 'announcements' },
    'PUB-11': { title: 'Gallery', sub: 'Photos from our events, organized by album.', kind: 'gallery' },
  }[id];
  var items, cardsHtml;
  if (cfg.kind === 'committee') {
    items = COMMITTEE;
    cardsHtml = items.map(function (c) { return '<article class="mini-card mini-card--person" data-goto="PUB-05">' + avatar(c.name, 64) + '<h4>' + c.name + '</h4><p class="muted small">' + c.title + ' · ' + c.village + '</p></article>'; }).join('');
  } else if (cfg.kind === 'members') {
    items = MEMBERS;
    cardsHtml = items.map(function (m) { return '<article class="mini-card mini-card--person" data-goto="PUB-07">' + avatar(m.name, 64) + '<h4>' + m.name + '</h4><p class="muted small">' + m.village + ' · ' + m.city + '</p></article>'; }).join('');
  } else if (cfg.kind === 'events') {
    items = EVENTS;
    cardsHtml = items.map(function (e) { return '<article class="mini-card" data-goto="PUB-09"><div class="mini-card-img mini-card-img--events">' + icon('calendar', 26) + '</div><h4>' + e.title + '</h4><p class="muted small">' + e.date + ' · ' + e.venue + '</p></article>'; }).join('');
  } else if (cfg.kind === 'announcements') {
    return publicShell(id, '<div class="content-page"><h1>' + cfg.title + '</h1><p class="page-sub">' + cfg.sub + '</p><div class="list-plain list-plain--bordered">' + ANNOUNCEMENTS.map(function (a) {
      return iconListRow('bell', a.title, a.excerpt, a.date, { goto: 'PUB-10', tint: 'a' });
    }).join('') + '</div></div>');
  } else {
    items = GALLERY;
    cardsHtml = items.map(function (g) { return '<article class="mini-card" data-goto="PUB-11"><div class="mini-card-img mini-card-img--gallery">' + icon('image', 26) + '</div><h4 class="small">' + g.caption + '</h4><p class="muted small">' + g.count + ' photos</p></article>'; }).join('');
  }
  return publicShell(id, '' +
    '<div class="content-page">' +
      '<h1>' + cfg.title + '</h1><p class="page-sub">' + cfg.sub + '</p>' +
      '<div class="toolbar">' +
        '<div class="toolbar-search">' + icon('search', 16) + '<input placeholder="Search by name, village, or city…"/></div>' +
        '<select class="filter-select"><option>All villages</option><option>Anandpur</option><option>Ratanpur</option><option>Shantigram</option><option>Devpur</option></select>' +
      '</div>' +
      '<div class="card-grid">' + cardsHtml + '</div>' +
      '<div class="pagination"><button class="icon-btn" disabled>' + icon('chevronRight', 16) + '</button><span>Page 1 of 6</span><button class="icon-btn">' + icon('chevronRight', 16) + '</button></div>' +
    '</div>'
  );
}

function renderDetail(id) {
  if (id === 'PUB-07') {
    var m = MEMBERS[1];
    return publicShell(id, '' +
      '<div class="detail-page">' +
        '<a class="back-link" data-goto="PUB-06">' + icon('arrowLeft', 15) + ' Back to Directory</a>' +
        '<div class="detail-hero">' + avatar(m.name, 96) + '<div><h1>' + m.name + '</h1><p class="muted">' + m.village + ' · ' + m.city + '</p>' + badge('Verified Member', 'success') + '</div></div>' +
        '<div class="detail-columns">' +
          '<div class="detail-body">' +
            section('Public Info', '<div class="kv-grid"><div><span class="k">Village / Gam</span><span class="v">' + m.village + '</span></div><div><span class="k">City</span><span class="v">' + m.city + '</span></div><div><span class="k">Family</span><span class="v">Patel Family — ' + m.village + '</span></div></div>') +
            section('Member-Only Info', '<p class="locked-note">' + icon('shield', 15) + ' Phone and email are visible to logged-in members. <a data-goto="AUTH-01">Log in to view</a>.</p>') +
          '</div>' +
          '<div class="detail-sidebar">' + section('Actions', btn('Message Member', { variant: 'primary', goto: 'AUTH-01' }) + btn('Report an issue', { goto: 'PUB-12' })) + '</div>' +
        '</div>' +
      '</div>'
    );
  }
  var e = EVENTS[0];
  return publicShell(id, '' +
    '<div class="detail-page">' +
      '<a class="back-link" data-goto="PUB-08">' + icon('arrowLeft', 15) + ' Back to Events</a>' +
      '<div class="detail-hero detail-hero--event"><div class="mini-card-img mini-card-img--events" style="width:96px;height:96px">' + icon('calendar', 34) + '</div><div><h1>' + e.title + '</h1><p class="muted">' + e.date + ' · ' + e.venue + '</p></div></div>' +
      '<div class="detail-columns">' +
        '<div class="detail-body">' + section('About this event', '<p>' + e.desc + '</p>') + '</div>' +
        '<div class="detail-sidebar">' + section('Details', '<div class="kv-grid"><div><span class="k">Date</span><span class="v">' + e.date + '</span></div><div><span class="k">Venue</span><span class="v">' + e.venue + '</span></div></div>' + btn('RSVP', { variant: 'primary', goto: 'AUTH-01' }) + btn('Add to calendar', {})) + '</div>' +
      '</div>' +
    '</div>'
  );
}

function renderContact() {
  return publicShell('PUB-12', '' +
    '<div class="content-page">' +
      '<h1>Get in Touch</h1><p class="page-sub">Questions, feedback, or need help with your membership? Send us a note.</p>' +
      '<div class="contact-columns">' +
        '<div class="contact-info">' +
          '<p>' + icon('mapPin', 17) + ' ' + ORG.address + '</p>' +
          '<p>' + icon('phone', 17) + ' ' + ORG.phone + '</p>' +
          '<p>' + icon('mail', 17) + ' ' + ORG.email + '</p>' +
          '<div class="map-placeholder">' + icon('mapPin', 28) + '<span>Map</span></div>' +
        '</div>' +
        '<form class="contact-form" data-submit-goto="PUB-12-sent">' +
          field('Name', { placeholder: 'Your full name' }) +
          field('Email', { placeholder: 'you@example.com', type: 'email' }) +
          field('Subject', { placeholder: 'What’s this about?' }) +
          field('Message', { textarea: true, placeholder: 'Type your message…' }) +
          btn('Send Message', { variant: 'primary', type: 'submit' }) +
        '</form>' +
      '</div>' +
    '</div>'
  );
}

function renderAuth(id) {
  var mode = { 'AUTH-01': 'login', 'AUTH-02': 'register', 'AUTH-03': 'forgot', 'AUTH-04': 'reset' }[id];
  var titles = { login: 'Welcome back', register: 'Join ' + ORG.name, forgot: 'Reset your password', reset: 'Choose a new password' };
  var body = '';
  if (mode === 'login') {
    body = field('Email', { placeholder: 'you@example.com' }) + field('Password', { type: 'password', placeholder: '••••••••' }) +
      btn('Log In', { variant: 'primary', type: 'submit' }) +
      '<p class="auth-links"><a data-goto="AUTH-03">Forgot password?</a><a data-goto="AUTH-02">Don’t have an account? Register</a></p>';
  } else if (mode === 'register') {
    body = field('Full Name', { placeholder: 'As it should appear in the directory' }) +
      field('Email', { placeholder: 'you@example.com' }) +
      field('Village / Gam', { placeholder: 'Select village' }) +
      field('Family Name', { placeholder: 'e.g. Patel Family — Anandpur' }) +
      field('Password', { type: 'password', placeholder: '••••••••' }) +
      btn('Submit Application', { variant: 'primary', submitGoto: 'AUTH-05' }) +
      '<p class="auth-links"><a data-goto="AUTH-01">Already a member? Log in</a></p>';
  } else if (mode === 'forgot') {
    body = '<p class="muted">Enter the email on your account and we’ll send a reset link.</p>' + field('Email', { placeholder: 'you@example.com' }) +
      btn('Send Reset Link', { variant: 'primary', type: 'submit' }) + '<p class="auth-links"><a data-goto="AUTH-01">Back to login</a></p>';
  } else {
    body = field('New Password', { type: 'password', placeholder: '••••••••' }) + field('Confirm Password', { type: 'password', placeholder: '••••••••' }) +
      btn('Save New Password', { variant: 'primary', submitGoto: 'AUTH-01' });
  }
  return authShell('<h1>' + titles[mode] + '</h1>' + body);
}

function renderConfirm() {
  return authShell('' +
    '<div class="confirm-box">' + icon('check', 40) + '<h1>Application submitted</h1>' +
    '<p class="muted">Thanks for applying to ' + ORG.name + '. An admin will review your details — most applications are approved within 3–5 days. We’ll email you as soon as there’s a decision.</p>' +
    btn('Back to Home', { variant: 'primary', goto: 'PUB-01' }) +
    '</div>'
  );
}

function renderMemberDashboard() {
  return memberShell('MEM-01', '' +
    '<div class="mobile-home-head">' +
      greetingHeader('SATURDAY · SEP 26', 'Hi, Priya', 'Registered Member · Anandpur', 'Priya Patel') +
      statusHeroCard('MEMBERSHIP STATUS', 'Active', 'Renews Dec 31, 2026', { dot: 'good', goto: 'MEM-09' }) +
      section('Quick Actions', '' +
        quickActionRow('edit', 'Edit Profile', 'Update your personal details', 'a', { goto: 'MEM-03' }) +
        quickActionRow('users', 'Add Family Member', 'Register a spouse or child', 'b', { goto: 'MEM-04' }) +
        quickActionRow('search', 'Browse Directory', 'Find other members nearby', 'c', { goto: 'MEM-07' })
      ) +
    '</div>' +
    '<div class="desktop-only-hero">' +
      '<div class="page-head"><h1>Welcome back, Priya</h1><p class="muted">Here’s what’s new in the community.</p></div>' +
      '<div class="stat-tiles">' +
        '<div class="stat-tile" data-goto="MEM-05"><span class="stat-tile-value">2</span><span class="stat-tile-label">Upcoming events</span></div>' +
        '<div class="stat-tile" data-goto="MEM-04"><span class="stat-tile-value">4</span><span class="stat-tile-label">Family members</span></div>' +
        '<div class="stat-tile" data-goto="MEM-08"><span class="stat-tile-value">3</span><span class="stat-tile-label">Unread notices</span></div>' +
        '<div class="stat-tile stat-tile--good"><span class="stat-tile-value">' + icon('check', 20) + '</span><span class="stat-tile-label">Membership active</span></div>' +
      '</div>' +
    '</div>' +
    '<div class="two-col">' +
      section('Your Upcoming Events', EVENTS.slice(0, 2).map(function (e) { return '<div class="list-row" data-goto="MEM-05"><div><h4>' + e.title + '</h4><p class="muted small">' + e.date + '</p></div>' + badge('Going', 'success') + '</div>'; }).join('')) +
      section('Recent Announcements', ANNOUNCEMENTS.slice(0, 2).map(function (a) { return iconListRow('bell', a.title, a.date, null, { goto: 'MEM-06', tint: 'b' }); }).join('')) +
    '</div>' +
    '<div class="desktop-only">' + section('Quick Links', btn('Edit Profile', { goto: 'MEM-03', icon: 'edit' }) + btn('Add Family Member', { goto: 'MEM-04', icon: 'plus' }) + btn('Browse Directory', { goto: 'MEM-07', icon: 'search' })) + '</div>'
  );
}

function renderProfileForm(id) {
  var settingsMode = id === 'MEM-09';
  var m = MEMBERS[3];
  return memberShell(id, '' +
    '<div class="page-head"><h1>' + (settingsMode ? 'Settings' : 'My Profile') + '</h1></div>' +
    '<div class="profile-summary">' + avatar(m.name, 84) + '<div><h2>' + m.name + '</h2><p class="muted">' + m.village + ' · ' + m.city + '</p></div>' + btn('Edit', { goto: 'MEM-03', icon: 'edit' }) + '</div>' +
    '<div class="tabs"><span class="tab active">' + (settingsMode ? 'Notifications' : 'Personal Info') + '</span><span class="tab">Contact Info</span><span class="tab">Privacy</span></div>' +
    (settingsMode ?
      section('Notification Preferences', toggleRow('Email me about new events', true) + toggleRow('Email me about announcements', true) + toggleRow('SMS reminders', false)) :
      '<div class="form-grid">' + field('Full Name', { value: m.name }) + field('Date of Birth', { placeholder: 'DD/MM/YYYY' }) + field('Village / Gam', { value: m.village }) + field('Family', { value: 'Patel Family — ' + m.village }) + '</div>'
    ) +
    section('Privacy', toggleRow('Show my phone number to members', true) + toggleRow('Show my address to verified members only', true)) +
    btn('Save Changes', { variant: 'primary', goto: id })
  );
}

function renderMemberList(id) {
  var kind = { 'MEM-04': 'family', 'MEM-05': 'events', 'MEM-06': 'announcements', 'MEM-07': 'directory', 'MEM-08': 'notifications' }[id];
  var head = { family: 'Family Members', events: 'Events', announcements: 'Announcements', directory: 'Directory', notifications: 'Notifications' }[kind];
  var body;
  if (kind === 'family') {
    body = '<div class="toolbar">' + btn('Add Family Member', { variant: 'primary', icon: 'plus' }) + '</div>' +
      '<div class="table-wrap"><table class="data-table"><thead><tr><th></th><th>Name</th><th>Relation</th><th>Status</th><th></th></tr></thead><tbody>' +
      [['Rakesh Patel', 'Spouse', 'Verified'], ['Aarav Patel', 'Child', 'Verified'], ['Meera Patel', 'Child', 'Pending']].map(function (r) {
        return '<tr><td>' + avatar(r[0], 32) + '</td><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + badge(r[2], r[2] === 'Verified' ? 'success' : 'warning') + '</td><td class="row-actions">' + icon('edit', 16) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  } else if (kind === 'events') {
    body = '<div class="card-grid">' + EVENTS.map(function (e) { return '<article class="mini-card" data-goto="MEM-05"><div class="mini-card-img mini-card-img--events">' + icon('calendar', 24) + '</div><h4>' + e.title + '</h4><p class="muted small">' + e.date + '</p>' + badge('RSVP’d', 'success') + '</article>'; }).join('') + '</div>';
  } else if (kind === 'announcements') {
    body = '<div class="list-plain list-plain--bordered">' + ANNOUNCEMENTS.map(function (a) { return iconListRow('bell', a.title, a.excerpt, a.date, { tint: 'b' }); }).join('') + '</div>';
  } else if (kind === 'directory') {
    body = '<div class="toolbar"><div class="toolbar-search">' + icon('search', 16) + '<input placeholder="Search by name, village, city…"/></div></div>' +
      '<div class="card-grid">' + MEMBERS.map(function (m) { return '<article class="mini-card mini-card--person" data-goto="PUB-07">' + avatar(m.name, 56) + '<h4 class="small">' + m.name + '</h4><p class="muted small">' + m.village + '</p></article>'; }).join('') + '</div>';
  } else {
    body = '<div class="toolbar">' + btn('Mark all read', {}) + '</div>' +
      '<div class="list-plain list-plain--bordered">' +
      ['Your family member Meera Patel is pending verification', 'New announcement: Membership renewal open', 'Reminder: Diwali Dinner RSVP closes soon'].map(function (n) {
        return iconListRow('bell', n, '2 hours ago', null, { tint: 'c' });
      }).join('') + '</div>';
  }
  return memberShell(id, '<div class="page-head"><h1>' + head + '</h1></div>' + body + (kind === 'family' ? section('', '<div class="empty-state">' + icon('info', 20) + '<p>Nothing else here yet — add another family member to build out your household.</p></div>') : ''));
}

function renderAdminDashboard() {
  return adminShell('ADM-01', '' +
    '<div class="mobile-home-head">' +
      greetingHeader('SATURDAY · SEP 26', 'Hi, Ashokbhai', 'Admin · ' + ORG.name, 'Ashokbhai Patel') +
      statusHeroCard('TODAY’S PRIORITY', '3 Approvals Pending', 'Review the queue before the weekend', { dot: 'warn', goto: 'ADM-04' }) +
      section('Quick Actions', '' +
        quickActionRow('plus', 'Add Member', 'Create a new member record', 'a', { goto: 'ADM-03' }) +
        quickActionRow('calendar', 'Create Event', 'Publish a new community event', 'b', { goto: 'ADM-08' }) +
        quickActionRow('bell', 'Post Announcement', 'Share news with all members', 'c', { goto: 'ADM-10' })
      ) +
    '</div>' +
    '<div class="desktop-only-hero">' +
      '<div class="page-head"><h1>Admin Dashboard</h1><p class="muted">' + ORG.name + ' — overview</p></div>' +
      '<div class="stat-tiles">' +
        '<div class="stat-tile" data-goto="ADM-02"><span class="stat-tile-value">2,657</span><span class="stat-tile-label">Total members</span></div>' +
        '<div class="stat-tile stat-tile--warn" data-goto="ADM-04"><span class="stat-tile-value">3</span><span class="stat-tile-label">Pending approvals</span></div>' +
        '<div class="stat-tile" data-goto="ADM-07"><span class="stat-tile-value">6</span><span class="stat-tile-label">Upcoming events</span></div>' +
        '<div class="stat-tile" data-goto="ADM-12"><span class="stat-tile-value">1</span><span class="stat-tile-label">Unread messages</span></div>' +
      '</div>' +
    '</div>' +
    section('Signups over time', '<div class="chart-placeholder"><svg viewBox="0 0 320 100" preserveAspectRatio="none"><polyline points="0,80 40,70 80,74 120,55 160,60 200,40 240,44 280,20 320,26" fill="none" stroke="var(--chart-line)" stroke-width="3"/></svg></div>') +
    section('Recent Activity', ACTIVITY_LOG.map(function (l) { return iconListRow('clock', l.who, l.what, l.when, { tint: 'c' }); }).join(''), { action: btn('View log', { goto: 'ADM-18', small: true }) }) +
    '<div class="desktop-only">' + section('Quick Actions', btn('Add Member', { variant: 'primary', goto: 'ADM-03', icon: 'plus' }) + btn('Create Event', { goto: 'ADM-08', icon: 'plus' }) + btn('Post Announcement', { goto: 'ADM-10', icon: 'plus' })) + '</div>'
  );
}

var ADMIN_TABLE_CFG = {
  'ADM-02': { title: 'Member Management', cols: ['Name', 'Village', 'Status', 'Joined'], addGoto: 'ADM-03', rows: MEMBERS.map(function (m) { return [m.name, m.village, m.tier, 'Jan 2024']; }) },
  'ADM-05': { title: 'Family Management', cols: ['Family', 'Head of Family', 'Members', 'Village'], addGoto: 'ADM-03', rows: [['Patel Family — Anandpur', 'Rajesh Patel', '4', 'Anandpur'], ['Patel Family — Ratanpur', 'Kavita Patel', '3', 'Ratanpur']] },
  'ADM-06': { title: 'Committee Management', cols: ['Name', 'Title', 'Village', 'Term'], addGoto: 'ADM-03', rows: COMMITTEE.map(function (c) { return [c.name, c.title, c.village, '2026–28']; }) },
  'ADM-07': { title: 'Events — Manage', cols: ['Title', 'Date', 'Status', 'RSVPs'], addGoto: 'ADM-08', rows: EVENTS.map(function (e, i) { return [e.title, e.date, i < 4 ? 'Published' : 'Draft', 42 + i * 7]; }) },
  'ADM-09': { title: 'Announcements — Manage', cols: ['Title', 'Date', 'Status'], addGoto: 'ADM-10', rows: ANNOUNCEMENTS.map(function (a, i) { return [a.title, a.date, i === 0 ? 'Draft' : 'Published']; }) },
  'ADM-12': { title: 'Contact Messages', cols: ['From', 'Subject', 'Status', 'Received'], rows: CONTACT_MESSAGES.map(function (c) { return [c.name, c.subject, c.status, c.when]; }) },
  'ADM-14': { title: 'Media / Gallery Management', cols: ['Album', 'Photos', 'Status'], addGoto: 'ADM-11', rows: GALLERY.map(function (g) { return [g.caption, g.count, 'Published']; }) },
  'ADM-15': { title: 'Admin Users', cols: ['Name', 'Role', 'Last Active'], rows: [['Ashokbhai Patel', 'Super Admin', 'Today'], ['Kavita Patel', 'Admin', 'Today'], ['Nileshbhai Patel', 'Admin', 'Yesterday']] },
  'ADM-18': { title: 'Activity Log', cols: ['Actor', 'Action', 'When'], rows: ACTIVITY_LOG.map(function (l) { return [l.who, l.what, l.when]; }) },
};
function renderAdminTable(id) {
  var cfg = ADMIN_TABLE_CFG[id];
  var statusCol = cfg.cols.indexOf('Status');
  return adminShell(id, '' +
    '<div class="page-head"><h1>' + cfg.title + '</h1></div>' +
    '<div class="toolbar"><div class="toolbar-search">' + icon('search', 16) + '<input placeholder="Search…"/></div><select class="filter-select"><option>All statuses</option></select>' + (cfg.addGoto ? btn('Add New', { variant: 'primary', icon: 'plus', goto: cfg.addGoto }) : '') + '</div>' +
    '<div class="table-wrap"><table class="data-table"><thead><tr><th class="checkcol"><input type="checkbox"/></th>' + cfg.cols.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '<th></th></tr></thead><tbody>' +
      cfg.rows.map(function (r) {
        return '<tr><td class="checkcol"><input type="checkbox"/></td>' + r.map(function (v, i) {
          if (i === statusCol) return '<td>' + badge(v, v === 'Published' || v === 'Verified' || v === 'Resolved' || v === 'Super Admin' ? 'success' : v === 'Draft' || v === 'Pending' ? 'warning' : v === 'Spam' ? 'danger' : 'neutral') + '</td>';
          return '<td>' + v + '</td>';
        }).join('') + '<td class="row-actions">' + icon('edit', 16) + icon('trash', 16) + '</td></tr>';
      }).join('') +
    '</tbody></table></div>' +
    '<div class="pagination"><span>Showing ' + cfg.rows.length + ' of ' + cfg.rows.length + '</span></div>'
  );
}

function renderApprovalQueue() {
  return adminShell('ADM-04', '' +
    '<div class="page-head"><h1>Member Approval Queue</h1></div>' +
    '<div class="tabs"><span class="tab active">Pending (' + PENDING_APPLICATIONS.length + ')</span><span class="tab">Approved</span><span class="tab">Rejected</span></div>' +
    '<div class="approval-list">' + PENDING_APPLICATIONS.map(function (p) {
      return '<div class="approval-card">' + avatar(p.name, 48) + '<div class="approval-info"><h4>' + p.name + '</h4><p class="muted small">Submitted ' + p.submitted + '</p></div>' +
        '<div class="approval-actions">' + btn('View', {}) + btn('Approve', { variant: 'primary', goto: 'ADM-02' }) + btn('Reject', { variant: 'danger', goto: 'ADM-04' }) + '</div></div>';
    }).join('') + '</div>'
  );
}

var ADMIN_FORM_CFG = {
  member: { title: 'Add / Edit Member', back: 'ADM-02', save: 'ADM-02', fields: ['Full Name', 'Village / Gam', 'City', 'Family'] },
  event: { title: 'Create / Edit Event', back: 'ADM-07', save: 'ADM-07', fields: ['Title', 'Date & Time', 'Venue'], desc: true, media: true },
  announcement: { title: 'Create / Edit Announcement', back: 'ADM-09', save: 'ADM-09', fields: ['Title'], desc: true },
  gallery: { title: 'Upload to Gallery', back: 'ADM-14', save: 'ADM-14', fields: ['Album Title'], media: true, multiUpload: true },
  content: { title: 'Edit Homepage / About Content', back: 'ADM-01', save: 'ADM-01', fields: ['Page Title'], desc: true },
};
function renderAdminForm(id) {
  var kind = { 'ADM-03': 'member', 'ADM-08': 'event', 'ADM-10': 'announcement', 'ADM-11': 'gallery', 'ADM-13': 'content' }[id];
  var cfg = ADMIN_FORM_CFG[kind];
  return adminShell(id === 'ADM-11' ? 'ADM-14' : (id === 'ADM-13' ? 'ADM-13' : id), '' +
    '<a class="back-link" data-goto="' + cfg.back + '">' + icon('arrowLeft', 15) + ' Back</a>' +
    '<div class="page-head"><h1>' + cfg.title + '</h1></div>' +
    '<div class="form-grid">' + cfg.fields.map(function (f) { return field(f, { placeholder: 'e.g. ' + f }); }).join('') + '</div>' +
    (cfg.desc ? field('Description', { textarea: true, placeholder: 'Full content — rendered on the public site' }) : '') +
    (cfg.media ? '<div class="dropzone">' + icon('upload', 26) + '<p>' + (cfg.multiUpload ? 'Drag photos here, or click to upload (multiple files supported)' : 'Drag an image here, or click to upload') + '</p></div>' : '') +
    section('Status', '<div class="status-toggle"><label><input type="radio" name="status-' + id + '"/> Draft</label><label><input type="radio" name="status-' + id + '" checked/> Published</label></div>') +
    '<div class="form-actions">' + btn('Save Draft', { goto: cfg.save }) + btn('Preview', {}) + btn('Publish', { variant: 'primary', goto: cfg.save }) + btn('Cancel', { goto: cfg.back }) + '</div>'
  );
}

function renderRolesEditor() {
  var perms = ['Approve members', 'Edit events & announcements', 'Manage gallery', 'Edit admin users', 'Edit roles & permissions', 'Edit system settings'];
  var superOnly = { 'Edit admin users': 1, 'Edit roles & permissions': 1, 'Edit system settings': 1 };
  return adminShell('ADM-16', '' +
    '<div class="page-head"><h1>Roles & Permissions</h1><p class="muted">Admin runs day-to-day content. Only Super Admin can manage other admins, roles, and settings.</p></div>' +
    '<div class="table-wrap"><table class="data-table"><thead><tr><th>Permission</th><th>Admin</th><th>Super Admin</th></tr></thead><tbody>' +
    perms.map(function (p) {
      return '<tr><td>' + p + '</td><td><span class="switch ' + (superOnly[p] ? '' : 'on') + '"><span class="knob"></span></span></td><td><span class="switch on"><span class="knob"></span></span></td></tr>';
    }).join('') + '</tbody></table></div>' +
    btn('Save Role Changes', { variant: 'primary', goto: 'ADM-16' })
  );
}

function renderAdminSettings() {
  return adminShell('ADM-17', '' +
    '<div class="page-head"><h1>Settings</h1></div>' +
    '<div class="form-grid">' + field('Site Name', { value: ORG.name }) + field('Contact Email', { value: ORG.email }) + '</div>' +
    section('Preferences', toggleRow('Email notifications for new applications', true) + toggleRow('Bilingual support (English / Gujarati) — coming soon', false) + toggleRow('Maintenance mode', false)) +
    btn('Save Settings', { variant: 'primary', goto: 'ADM-17' })
  );
}

/* ---------- screen registry ---------- */
var SCREENS = {};
['PUB-01'].forEach(function (id) { SCREENS[id] = { group: 'Public', name: 'Home', render: renderHome }; });
[['PUB-02', 'About'], ['PUB-03', 'History'], ['PUB-04', 'Mission & Vision'], ['PUB-13', 'FAQ'], ['PUB-14', 'Privacy Policy'], ['PUB-15', 'Terms & Conditions']].forEach(function (p) {
  SCREENS[p[0]] = { group: 'Public', name: p[1], render: function () { return renderContent(p[0]); } };
});
[['PUB-05', 'Committee'], ['PUB-06', 'Member Directory'], ['PUB-08', 'Events'], ['PUB-10', 'Announcements'], ['PUB-11', 'Gallery']].forEach(function (p) {
  SCREENS[p[0]] = { group: 'Public', name: p[1], render: function () { return renderListing(p[0]); } };
});
SCREENS['PUB-07'] = { group: 'Public', name: 'Member Profile', render: function () { return renderDetail('PUB-07'); } };
SCREENS['PUB-09'] = { group: 'Public', name: 'Event Details', render: function () { return renderDetail('PUB-09'); } };
SCREENS['PUB-12'] = { group: 'Public', name: 'Contact', render: renderContact };
SCREENS['PUB-12-sent'] = { group: 'Public', name: 'Message Sent', hidden: true, render: function () { return authShell('<div class="confirm-box">' + icon('check', 40) + '<h1>Message sent</h1><p class="muted">Thanks for reaching out — the committee usually replies within a couple of days.</p>' + btn('Back to Home', { variant: 'primary', goto: 'PUB-01' }) + '</div>'); } };
[['AUTH-01', 'Login'], ['AUTH-02', 'Register'], ['AUTH-03', 'Forgot Password'], ['AUTH-04', 'Reset Password']].forEach(function (p) {
  SCREENS[p[0]] = { group: 'Authentication', name: p[1], render: function () { return renderAuth(p[0]); } };
});
SCREENS['AUTH-05'] = { group: 'Authentication', name: 'Registration Submitted', render: renderConfirm };
SCREENS['MEM-01'] = { group: 'Member Area', name: 'Dashboard', render: renderMemberDashboard };
[['MEM-02', 'My Profile'], ['MEM-03', 'Edit Profile'], ['MEM-09', 'Settings']].forEach(function (p) {
  SCREENS[p[0]] = { group: 'Member Area', name: p[1], render: function () { return renderProfileForm(p[0]); } };
});
[['MEM-04', 'Family Members'], ['MEM-05', 'Events'], ['MEM-06', 'Announcements'], ['MEM-07', 'Directory'], ['MEM-08', 'Notifications']].forEach(function (p) {
  SCREENS[p[0]] = { group: 'Member Area', name: p[1], render: function () { return renderMemberList(p[0]); } };
});
SCREENS['ADM-01'] = { group: 'Admin Panel', name: 'Dashboard', render: renderAdminDashboard };
Object.keys(ADMIN_TABLE_CFG).forEach(function (id) {
  SCREENS[id] = { group: 'Admin Panel', name: ADMIN_TABLE_CFG[id].title, render: function () { return renderAdminTable(id); } };
});
SCREENS['ADM-04'] = { group: 'Admin Panel', name: 'Member Approval Queue', render: renderApprovalQueue };
[['ADM-03', 'Add / Edit Member'], ['ADM-08', 'Create / Edit Event'], ['ADM-10', 'Create / Edit Announcement'], ['ADM-11', 'Gallery Upload'], ['ADM-13', 'Homepage / About Content']].forEach(function (p) {
  SCREENS[p[0]] = { group: 'Admin Panel', name: p[1], render: function () { return renderAdminForm(p[0]); } };
});
SCREENS['ADM-16'] = { group: 'Admin Panel', name: 'Roles & Permissions', render: renderRolesEditor };
SCREENS['ADM-17'] = { group: 'Admin Panel', name: 'Settings', render: renderAdminSettings };

/* ---------- app shell: prototype chrome, router, viewport toggle ---------- */
function buildChrome() {
  var groups = ['Public', 'Authentication', 'Member Area', 'Admin Panel'];
  var navHtml = groups.map(function (g) {
    var items = Object.keys(SCREENS).filter(function (id) { return SCREENS[id].group === g && !SCREENS[id].hidden; });
    return '<optgroup label="' + g + '">' + items.map(function (id) { return '<option value="' + id + '">' + id + ' — ' + SCREENS[id].name + '</option>'; }).join('') + '</optgroup>';
  }).join('');
  return '' +
    '<div class="proto-bar">' +
      '<div class="proto-brand">' + icon('grid', 16) + '<span>' + (window.CONCEPT_NAME || 'Concept') + '</span></div>' +
      '<select class="proto-jump" id="proto-jump">' + navHtml + '</select>' +
    '</div>' +
    '<div class="proto-viewport" id="proto-viewport"><div id="app"></div></div>';
}

function currentId() {
  var h = (location.hash || '').replace('#', '');
  return SCREENS[h] ? h : 'PUB-01';
}
function renderCurrent() {
  var id = currentId();
  document.getElementById('app').innerHTML = SCREENS[id].render();
  var jump = document.getElementById('proto-jump');
  if (jump) jump.value = id;
  document.querySelectorAll('[data-goto]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      location.hash = el.getAttribute('data-goto');
    });
  });
  document.querySelectorAll('[data-menu-toggle]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      var d = document.querySelector('.mobile-drawer, .sidebar');
      if (d) d.classList.toggle('open');
    });
  });
  document.querySelectorAll('[data-drawer-close]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      var d = document.querySelector('.mobile-drawer.open, .sidebar.open');
      if (d) d.classList.remove('open');
    });
  });
  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var goto = f.getAttribute('data-submit-goto');
      if (goto) location.hash = goto;
    });
  });
  document.querySelectorAll('[data-submit-goto]').forEach(function (el) {
    if (el.tagName === 'BUTTON' && el.getAttribute('type') !== 'submit') {
      el.addEventListener('click', function (e) { e.preventDefault(); location.hash = el.getAttribute('data-submit-goto'); });
    }
  });
  document.querySelectorAll('.switch').forEach(function (s) {
    s.addEventListener('click', function () { s.classList.toggle('on'); });
  });
  document.querySelectorAll('.tabs .tab').forEach(function (t) {
    t.addEventListener('click', function () {
      t.parentElement.querySelectorAll('.tab').forEach(function (x) { x.classList.remove('active'); });
      t.classList.add('active');
    });
  });
  var viewport = document.getElementById('proto-viewport');
  if (viewport) viewport.scrollTop = 0;
}
function applyMode() {
  var vp = document.getElementById('proto-viewport');
  if (!vp) return;
  vp.classList.toggle('mobile-layout', window.innerWidth < 720);
}
function mountApp() {
  document.body.insertAdjacentHTML('afterbegin', buildChrome());
  document.getElementById('proto-jump').addEventListener('change', function (e) { location.hash = e.target.value; });
  window.addEventListener('resize', applyMode);
  window.addEventListener('hashchange', function () { renderCurrent(); });
  // Close the mobile "More" drawer/sidebar when tapping anywhere outside it.
  document.addEventListener('click', function (e) {
    var openDrawer = document.querySelector('.mobile-drawer.open, .sidebar.open');
    if (!openDrawer) return;
    if (openDrawer.contains(e.target)) return;
    if (e.target.closest('[data-menu-toggle]')) return;
    openDrawer.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var openDrawer = document.querySelector('.mobile-drawer.open, .sidebar.open');
    if (openDrawer) openDrawer.classList.remove('open');
  });
  renderCurrent();
  applyMode();
}
