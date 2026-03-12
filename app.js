/* ================================================================
   Bangladesh Elite Publishing Houses – Directory Data & Logic
   ================================================================ */

const publishers = [
  {
    id: 1,
    name: "The University Press Limited (UPL)",
    nameBn: "ইউনিভার্সিটি প্রেস লিমিটেড",
    established: 1975,
    address: "74/B/1 Green Road, RH Home Centre, 3rd Floor, Suit# 232-239, Tejgaon, Dhaka-1215",
    phone: "+8802 44815289 / +8802 44815288",
    email: "info@uplbooks.com.bd",
    website: "https://uplbooks.com",
    websiteLabel: "uplbooks.com",
    genres: ["Academic", "History", "Economics", "Cultural Studies", "English Language"],
    elite: true,
    eliteRank: 1,
    description: "Founded in 1975 as the former Dhaka branch of Oxford University Press, UPL is Bangladesh's foremost academic publisher with 1,500+ titles across humanities, social sciences, and development studies."
  },
  {
    id: 2,
    name: "Agamee Prakashani",
    nameBn: "আগামী প্রকাশনী",
    established: 1986,
    address: "36 Bangla Bazar, Dhaka-1100",
    phone: "+880 2-9591185",
    email: "info@agameeprakashani-bd.com",
    website: "https://agameeprakashani-bd.com",
    websiteLabel: "agameeprakashani-bd.com",
    genres: ["Literature", "Liberation War", "Poetry", "Biography", "Fiction"],
    elite: true,
    eliteRank: 2,
    description: "Established in 1986 by Osman Gani, Agamee is Bangladesh's most prolific literary publisher with over 2,000 titles. Renowned for the largest collection of Liberation War titles and works by Bangladesh's top authors."
  },
  {
    id: 3,
    name: "Anyaprokash",
    nameBn: "অন্যপ্রকাশ",
    established: 1971,
    address: "69/F, Green Road, Panthapath, Dhaka-1205",
    phone: "+880 1713-191450 / +880 1688-369660",
    email: "anyaprokash1971@gmail.com",
    website: "https://anyaprokash.com",
    websiteLabel: "anyaprokash.com",
    genres: ["Fiction", "Poetry", "Memoir", "Essays", "Critical Writing"],
    elite: true,
    eliteRank: 3,
    description: "One of Bangladesh's most respected literary publishers, Anyaprokash is celebrated for publishing thought-provoking fiction and poetry by both emerging and established authors, with aesthetically designed books."
  },
  {
    id: 4,
    name: "Prothoma Prokashon",
    nameBn: "প্রথমা প্রকাশন",
    established: 2008,
    address: "147, Green Road, Dhaka-1205",
    phone: "+880 9613-105805",
    email: "admin@prothoma.com.bd",
    website: "https://prothoma.com.bd",
    websiteLabel: "prothoma.com.bd",
    genres: ["Literary Fiction", "History", "Children's", "Academic", "Current Affairs"],
    elite: true,
    eliteRank: 4,
    description: "The publishing arm of Prothom Alo, Bangladesh's largest newspaper. Prothoma publishes high-quality books in collaboration with leading Bangladeshi authors and intellectuals, with a strong distribution network nationwide."
  },
  {
    id: 5,
    name: "Bangla Academy",
    nameBn: "বাংলা একাডেমি",
    established: 1955,
    address: "Burdwan House, 3 Kazi Nazrul Islam Avenue, Ramna, Dhaka-1000",
    phone: "+880 2-8619577",
    email: "info@banglaacademy.gov.bd",
    website: "https://banglaacademy.gov.bd",
    websiteLabel: "banglaacademy.gov.bd",
    genres: ["Language & Linguistics", "Literature", "Research", "Translation", "Cultural Studies"],
    elite: true,
    eliteRank: 5,
    description: "Bangladesh's oldest and most authoritative literary institution, established 1955. Organizer of the annual Ekushey Book Fair and publisher of definitive works on Bengali language, literature, and culture."
  },
  {
    id: 6,
    name: "Sheba Prokashoni",
    nameBn: "সেবা প্রকাশনী",
    established: 1964,
    address: "24/4 Qazi Motahar Hossain Sarak, Segun Bagicha, Dhaka-1000",
    phone: "N/A",
    email: "N/A",
    website: "https://sebaprokashoni.com",
    websiteLabel: "sebaprokashoni.com",
    genres: ["Thriller", "Romance", "Adventure", "Popular Fiction", "Children's"],
    elite: false,
    eliteRank: null,
    description: "Home of the legendary Masud Rana and Tin Goyenda series. Seba Prokashoni has entertained generations of Bangladeshi readers since 1964 with popular fiction, thrillers, and adventure stories."
  },
  {
    id: 7,
    name: "Somoy Prokashon",
    nameBn: "সময় প্রকাশন",
    established: 2000,
    address: "38/2 Ka, Bangla Bazar, Dhaka-1100",
    phone: "+880 2-7121652",
    email: "somoy@somoy.com",
    website: "https://somoyprokashon.com",
    websiteLabel: "somoyprokashon.com",
    genres: ["Creative Literature", "Fiction", "Poetry", "Culture", "Contemporary Writing"],
    elite: false,
    eliteRank: null,
    description: "Somoy Prokashon is dedicated to enriching creative literature and cultural discourse in Bangladesh, publishing both established and upcoming writers with a focus on quality and innovation."
  },
  {
    id: 8,
    name: "Adarsha",
    nameBn: "আদর্শ",
    established: 2009,
    address: "20 Babupura, Kataban Dhal, Dhaka-1205",
    phone: "+880 1710-779050",
    email: "adarshabd@gmail.com",
    website: "https://adarshabooks.com",
    websiteLabel: "adarshabooks.com",
    genres: ["Contemporary Fiction", "Social Issues", "Nonfiction", "Politics", "Philosophy"],
    elite: false,
    eliteRank: null,
    description: "Adarsha is a dynamic modern publisher known for publishing books on social and political issues alongside compelling fiction. A growing favorite at the Ekushey Book Fair with bold editorial choices."
  },
  {
    id: 9,
    name: "Panjeree Publications Ltd.",
    nameBn: "পাঞ্জেরী পাবলিকেশন্স",
    established: 1994,
    address: "43, Shilpacharya Zainul Abedin Sarak, Shantinagar, Dhaka-1217",
    phone: "+880 9666-787980 / 58310156",
    email: "info@panjeree.com",
    website: "https://panjeree.com",
    websiteLabel: "panjeree.com",
    genres: ["Academic", "Textbooks", "Exam Guides", "Children's Literature", "Reference"],
    elite: false,
    eliteRank: null,
    description: "A cornerstone of Bangladesh's educational publishing since 1994. Panjeree is the leading provider of supplementary textbooks and guides for primary, secondary, and higher education across Bangladesh."
  },
  {
    id: 10,
    name: "Anannya",
    nameBn: "অনন্যা",
    established: 1985,
    address: "38/2 Ka, Bangla Bazar, Dhaka-1100",
    phone: "+880 1711-521134",
    email: "anannyadhaka@gmail.com",
    website: "https://ananya-books.com",
    websiteLabel: "ananya-books.com",
    genres: ["Women's Literature", "Fiction", "Poetry", "Feminist Writing", "Short Stories"],
    elite: false,
    eliteRank: null,
    description: "Anannya holds a special place in Bangladeshi publishing for championing women writers and feminist literature alongside mainstream fiction, playing a crucial role at the Ekushey Book Fair."
  },
  {
    id: 11,
    name: "Pathak Shamabesh",
    nameBn: "পাঠক সমাবেশ",
    established: 1987,
    address: "17 Aziz Market, Ground Floor, Shahbag, Dhaka-1000",
    phone: "+880 1841-234611",
    email: "pathakshamabesh@gmail.com",
    website: "https://pathakshamabesh.com",
    websiteLabel: "pathakshamabesh.com",
    genres: ["Cultural Studies", "Religion", "Literature", "History", "Humanities"],
    elite: false,
    eliteRank: null,
    description: "One of Dhaka's oldest and most respected publishers and booksellers, Pathak Shamabesh has been serving readers from Shahbag since 1987, publishing diverse titles across culture, religion, and humanities."
  },
  {
    id: 12,
    name: "Baatighar",
    nameBn: "বাতিঘর",
    established: 2003,
    address: "17 Mymensingh Road, Dhaka, Bangladesh",
    phone: "+880 1737-317841",
    email: "contact@baatighar.com",
    website: "https://baatighar.com",
    websiteLabel: "baatighar.com",
    genres: ["Fiction", "Nonfiction", "Children's", "Academic", "Self-help"],
    elite: false,
    eliteRank: null,
    description: "Baatighar (meaning 'lighthouse') is both a publisher and a major online book retailer in Bangladesh, publishing quality titles and acting as a key platform for Bangladeshi readers nationwide."
  },
  {
    id: 13,
    name: "Muktadhara",
    nameBn: "মুক্তধারা",
    established: 1971,
    address: "74, Farashganj Lane, Bangla Bazar, Dhaka-1100",
    phone: "+880 2-7111428",
    email: "N/A",
    website: "N/A",
    websiteLabel: null,
    genres: ["Liberation War", "Political History", "Literature", "Cultural Studies", "Bangla Classics"],
    elite: false,
    eliteRank: null,
    description: "A historic publisher founded during Bangladesh's Liberation War in 1971. Muktadhara started the very first Ekushey Book Fair stall and holds legendary status in Bangladeshi publishing history."
  },
  {
    id: 14,
    name: "Tamralipi",
    nameBn: "তাম্রলিপি",
    established: 2010,
    address: "67/A, Purana Paltan, Dhaka-1000",
    phone: "+880 1741-111000",
    email: "tamralipi@gmail.com",
    website: "N/A",
    websiteLabel: null,
    genres: ["Literary Fiction", "Academic", "Self-help", "Contemporary Writing"],
    elite: false,
    eliteRank: null,
    description: "A rising star in Bangladeshi publishing known for high production standards and a diverse catalog balancing commercial appeal with literary quality. Regular participant at major book fairs."
  },
  {
    id: 15,
    name: "Anupam Gyan Bhandar",
    nameBn: "অনুপম জ্ঞান ভান্ডার",
    established: 1983,
    address: "17/19 Bangla Bazar, Motijheel, Dhaka-1100",
    phone: "+880 2-9551498",
    email: "N/A",
    website: "N/A",
    websiteLabel: null,
    genres: ["Academic", "Competitive Exam Guides", "General Knowledge", "Reference"],
    elite: false,
    eliteRank: null,
    description: "A trusted publisher since 1983 with a diverse portfolio catering to students, professionals, and general readers. Celebrated for quality academic texts and competitive exam preparation materials."
  },
  {
    id: 16,
    name: "Adorn Publication",
    nameBn: "অ্যাডর্ন পাবলিকেশন",
    established: 2000,
    address: "Segun Bagicha, Dhaka-1000",
    phone: "+880 1714-098765",
    email: "adornpublication@gmail.com",
    website: "N/A",
    websiteLabel: null,
    genres: ["Literature", "Academic", "Creative Writing", "Young Authors"],
    elite: false,
    eliteRank: null,
    description: "Adorn Publication is recognized for nurturing new literary talent and offering a platform for emerging authors, while also maintaining a strong academic and creative catalog."
  },
  {
    id: 17,
    name: "Nymphea Publication",
    nameBn: "নিমফিয়া পাবলিকেশন্স",
    established: 1999,
    address: "205/1/A, Hashim Tower, Suite 6C, 6th Floor, Bir Uttam Mir Shawkat Sarak, Dhaka-1212",
    phone: "N/A",
    email: "N/A",
    website: "https://nympheapublication.com",
    websiteLabel: "nympheapublication.com",
    genres: ["Fiction", "Literature", "Poetry", "Nonfiction"],
    elite: false,
    eliteRank: null,
    description: "With over 25 years in Bangladeshi publishing, Nymphea Publication maintains a steady presence with quality literary fiction and poetry titles, contributing to the richness of Bangladeshi literature."
  },
  {
    id: 18,
    name: "Jatiya Sahitya Prakash",
    nameBn: "জাতীয় সাহিত্য প্রকাশ",
    established: 1980,
    address: "Bangla Bazar, Dhaka-1100",
    phone: "+880 2-9612723 / 01915-797360",
    email: "js.prakash0057@gmail.com",
    website: "N/A",
    websiteLabel: null,
    genres: ["Literature", "Bangla Classics", "Cultural Studies", "Poetry", "Drama"],
    elite: false,
    eliteRank: null,
    description: "A long-standing literary publisher focusing on classic and contemporary Bangla literature, drama, and poetry. A fixture at the Ekushey Book Fair with decades of contribution to Bangladeshi letters."
  },
  {
    id: 19,
    name: "Mayurpankhi",
    nameBn: "ময়ূরপঙ্খি",
    established: 2014,
    address: "Jamider Palace, 291 Inner Circular Road, Motijheel, Dhaka-1000",
    phone: "+880 1711-961588",
    email: "info@mayurpankhi.com",
    website: "https://mayurpankhi.com",
    websiteLabel: "mayurpankhi.com",
    genres: ["Children's Literature", "Picture Books", "Young Adult", "Educational Stories"],
    elite: false,
    eliteRank: null,
    description: "Award-winning publisher specializing in children's literature, recognized with the Bangla Academy's Rokonuzzaman Khan Dadabhai Smriti Award. Dedicated to fostering a love of reading among young Bangladeshi readers."
  },
  {
    id: 20,
    name: "Onnodhara",
    nameBn: "অন্যধারা",
    established: 2005,
    address: "38/2 Ka, Bangla Bazar, Dhaka-1100",
    phone: "+880 1741-000112",
    email: "onnodhara@gmail.com",
    website: "N/A",
    websiteLabel: null,
    genres: ["Fiction", "Contemporary Literature", "Social Issues", "Short Stories"],
    elite: false,
    eliteRank: null,
    description: "Onnodhara (meaning 'different stream') is known for publishing bold and contemporary fiction that challenges mainstream narratives, nurturing a new generation of Bangladeshi storytellers."
  }
];

/* ================================================================
   STATE
   ================================================================ */
let currentFilter = "all";   // "all" | "elite"
let currentSearch = "";
let sortCol    = null;
let sortDir    = 1;            // 1 = asc, -1 = desc

/* ================================================================
   RENDER SPOTLIGHT CARDS (Top 5)
   ================================================================ */
function renderSpotlight() {
  const grid = document.getElementById("spotlightGrid");
  const elites = publishers.filter(p => p.elite).sort((a, b) => a.eliteRank - b.eliteRank);
  grid.innerHTML = elites.map(p => `
    <div class="spot-card">
      <div class="spot-rank">#${p.eliteRank}</div>
      <div class="spot-name">${p.name}</div>
      <div class="spot-established">Est. ${p.established}</div>
      <div class="spot-genre">
        ${p.genres.slice(0, 3).map(g => `<span class="genre-chip">${g}</span>`).join("")}
      </div>
      <div class="spot-desc">${p.description}</div>
    </div>
  `).join("");
}

/* ================================================================
   HELPERS
   ================================================================ */
function iconSVG(type) {
  const icons = {
    address: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    phone:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l1.14-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    email:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    web:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    star:    `<svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
  };
  return icons[type] || "";
}

/* ================================================================
   RENDER TABLE ROWS
   ================================================================ */
function renderTable() {
  let data = [...publishers];

  // Filter
  if (currentFilter === "elite") {
    data = data.filter(p => p.elite);
  }

  // Search
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    data = data.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.nameBn && p.nameBn.includes(q)) ||
      p.address.toLowerCase().includes(q) ||
      p.genres.join(" ").toLowerCase().includes(q) ||
      String(p.established).includes(q)
    );
  }

  // Sort
  if (sortCol) {
    data.sort((a, b) => {
      let va = sortCol === "name" ? a.name : a.genres.join(", ");
      let vb = sortCol === "name" ? b.name : b.genres.join(", ");
      return va.localeCompare(vb) * sortDir;
    });
  }

  // Result count
  const countEl = document.getElementById("resultCount");
  countEl.textContent = `Showing ${data.length} of ${publishers.length} publishers`;
  document.getElementById("totalCount").textContent = publishers.length;

  const tbody    = document.getElementById("tableBody");
  const mobileWrap = document.getElementById("mobileCards");
  const noResults  = document.getElementById("noResults");

  if (data.length === 0) {
    tbody.innerHTML = "";
    if (mobileWrap) mobileWrap.innerHTML = "";
    tbody.style.display = "none";
    noResults.style.display = "block";
    return;
  }

  tbody.style.display = "";
  noResults.style.display = "none";

  /* ---------- DESKTOP TABLE ---------- */
  tbody.innerHTML = data.map((p, idx) => {
    const websiteCell = p.websiteLabel
      ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer">
           ${iconSVG('web')} ${p.websiteLabel}
         </a>`
      : `<span class="no-web">—</span>`;

    const badge = p.elite
      ? `<span class="elite-badge">${iconSVG('star')} Elite #${p.eliteRank}</span>`
      : `<span class="regular-badge">Publisher</span>`;

    return `
      <tr class="${p.elite ? "elite-row" : ""}">
        <td class="td-rank">${idx + 1}</td>
        <td class="td-name">
          <strong>${p.name}</strong>
          <span>${p.nameBn} · Est. ${p.established}</span>
        </td>
        <td class="td-address">${p.address}</td>
        <td class="td-phone">
          ${p.phone !== "N/A"
            ? p.phone.split(" / ").map(n => `<a href="tel:${n.replace(/\s/g,'')}">${n}</a>`).join("")
            : `<span style="color:#9ca3af;font-size:.8rem">—</span>`
          }
        </td>
        <td class="td-email">
          ${p.email !== "N/A"
            ? `<a href="mailto:${p.email}">${p.email}</a>`
            : `<span style="color:#9ca3af;font-size:.8rem">—</span>`
          }
        </td>
        <td class="td-web">${websiteCell}</td>
        <td><div class="genre-tags">${p.genres.map(g => `<span class="genre-tag">${g}</span>`).join("")}</div></td>
        <td>${badge}</td>
      </tr>
    `;
  }).join("");

  /* ---------- MOBILE CARDS ---------- */
  if (!mobileWrap) return;
  mobileWrap.innerHTML = data.map((p, idx) => {
    const phoneLine = p.phone !== "N/A"
      ? p.phone.split(" / ").map(n => `<a href="tel:${n.replace(/\s/g, '')}"> ${n}</a>`).join(", ")
      : `<span style="color:#9ca3af">Not available</span>`;
    const emailLine = p.email !== "N/A"
      ? `<a href="mailto:${p.email}">${p.email}</a>`
      : `<span style="color:#9ca3af">Not available</span>`;
    const websiteLine = p.websiteLabel
      ? `<a class="pub-card-website-btn" href="${p.website}" target="_blank" rel="noopener noreferrer">${iconSVG('web')} ${p.websiteLabel}</a>`
      : `<span style="color:#9ca3af">No website</span>`;

    const badgeHTML = p.elite
      ? `<span class="pub-card-badge-elite">${iconSVG('star')} Elite #${p.eliteRank}</span>`
      : `<span class="pub-card-badge-regular">Publisher</span>`;

    return `
      <div class="pub-card ${p.elite ? 'elite-card' : ''}" id="mc-${p.id}">
        <div class="pub-card-header" onclick="toggleCard(${p.id})">
          <div class="pub-card-left">
            <div class="pub-card-num">#${idx + 1} &nbsp;·&nbsp; Est. ${p.established}</div>
            <div class="pub-card-name">${p.name}</div>
            <div class="pub-card-name-bn">${p.nameBn}</div>
          </div>
          <div class="pub-card-right">
            ${badgeHTML}
            <div class="pub-card-chevron" id="chev-${p.id}">&#9660;</div>
          </div>
        </div>
        <div class="pub-card-genres">
          ${p.genres.map(g => `<span class="genre-chip">${g}</span>`).join("")}
        </div>
        <div class="pub-card-body" id="body-${p.id}">
          <div class="pub-card-row">
            <span class="pub-card-row-icon">${iconSVG('address')}</span>
            <span class="pub-card-row-label">Address</span>
            <span class="pub-card-row-val">${p.address}</span>
          </div>
          <div class="pub-card-row">
            <span class="pub-card-row-icon">${iconSVG('phone')}</span>
            <span class="pub-card-row-label">Phone</span>
            <span class="pub-card-row-val">${phoneLine}</span>
          </div>
          <div class="pub-card-row">
            <span class="pub-card-row-icon">${iconSVG('email')}</span>
            <span class="pub-card-row-label">Email</span>
            <span class="pub-card-row-val">${emailLine}</span>
          </div>
          <div class="pub-card-row">
            <span class="pub-card-row-icon">${iconSVG('web')}</span>
            <span class="pub-card-row-label">Website</span>
            <span class="pub-card-row-val">${websiteLine}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleCard(id) {
  const body = document.getElementById(`body-${id}`);
  const chev = document.getElementById(`chev-${id}`);
  if (!body) return;
  const isOpen = body.classList.toggle("open");
  chev.classList.toggle("open", isOpen);
}

/* ================================================================
   EVENT LISTENERS
   ================================================================ */
function clearAll() {
  currentSearch = "";
  currentFilter = "all";
  document.getElementById("searchInput").value = "";
  document.getElementById("clearSearch").classList.remove("visible");
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("btnAll").classList.add("active");
  document.getElementById("spotlightSection").style.display = "";
  renderTable();
}

document.getElementById("searchInput").addEventListener("input", function () {
  currentSearch = this.value.trim();
  const clearBtn = document.getElementById("clearSearch");
  if (currentSearch) {
    clearBtn.classList.add("visible");
  } else {
    clearBtn.classList.remove("visible");
  }
  renderTable();
});

document.getElementById("clearSearch").addEventListener("click", function () {
  currentSearch = "";
  document.getElementById("searchInput").value = "";
  this.classList.remove("visible");
  renderTable();
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    currentFilter = this.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    // Hide/show spotlight section when elite only is active
    const spotlight = document.getElementById("spotlightSection");
    spotlight.style.display = (currentFilter === "elite") ? "none" : "";
    renderTable();
  });
});

document.querySelectorAll("th.sortable").forEach(th => {
  th.addEventListener("click", function () {
    const col = this.dataset.col;
    if (sortCol === col) {
      sortDir *= -1;
    } else {
      sortCol = col;
      sortDir = 1;
    }
    document.querySelectorAll(".sort-icon").forEach(s => s.textContent = "↕");
    this.querySelector(".sort-icon").textContent = sortDir === 1 ? "↑" : "↓";
    renderTable();
  });
});

/* ================================================================
   INIT
   ================================================================ */
renderSpotlight();
renderTable();
