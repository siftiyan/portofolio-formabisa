Pemenuhan penugasan javascript
(karena tidak menemukan API yang proper, rencana sebelumnya memakai API berita unesa. namun tidak ditemukan, jadi pada akhirnya saya memakai array internal untuk ditampilkan di index melalui beruoa anggota saya)

// array anggota
const teamMembers = [
      { name: "Siftiyan Abdullah", role: "Ketua Umum", department: "T. Informatika", image: "./images/profile/BPH-siftiyan.png" },
      { name: "Dian Amaliya", role: "Wakil Ketua Umum", department: "T. Pendidikan", image: "./images/profile/BPH-amel.png" },
      { name: "Febrina Rizky A.", role: "Sekertaris Umum 2", department: "Pend. Tata Rias", image: "./images/profile/SEKRETARIS_FEBRINA 2.JPG" },
dst....

 // Fungsi untuk membuat elemen anggota tim
  function createTeamMember(member) {
    const memberElement = document.createElement("div");
    memberElement.classList.add("col-xl-2", "col-md-4", "d-flex");
    memberElement.setAttribute("data-aos", "fade-up");
    memberElement.setAttribute("data-aos-delay", "100");
    memberElement.innerHTML = `
      <div class="member">
        <img src="${member.image}" class="img-fluid" alt="" />
        <h4>${member.name}</h4>
        <h6>${member.role}</h6>
        <span>${member.department}</span>
      </div>
    `;
    return memberElement;
  }
  
  // Menambahkan anggota tim ke dalam elemen dengan id "team-members"
  const teamContainer = document.getElementById("team-members");
  teamMembers.forEach(member => {
    const memberElement = createTeamMember(member);
    teamContainer.appendChild(memberElement);
  });
  
