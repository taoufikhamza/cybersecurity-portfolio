/* ==========================================================================
   CLEAN CYBER TERMINAL CLI — TAOUFIK HAMZA PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const cmdBadges = document.querySelectorAll('.cmd-badge');

  if (!terminalInput || !terminalBody) return;

  // Clean Initial Prompt Output
  const welcomeMessage = `
<span class="prompt">taoufik@terminal:~$</span> <span style="color: var(--cyber-cyan); font-weight: 600;">bienvenue</span>
[+] Tapez <span style="color: var(--cyber-green); font-weight: bold;">'help'</span> ou cliquez sur les boutons ci-dessous pour explorer mon profil.
`;

  appendTerminalOutput(welcomeMessage);

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = terminalInput.value.trim();
      if (command.length > 0) {
        processCommand(command);
      }
      terminalInput.value = '';
    }
  });

  cmdBadges.forEach(badge => {
    badge.addEventListener('click', () => {
      const cmd = badge.getAttribute('data-cmd');
      if (cmd) {
        terminalInput.value = cmd;
        processCommand(cmd);
        terminalInput.value = '';
      }
    });
  });

  function processCommand(cmd) {
    const cleanCmd = cmd.toLowerCase().trim();
    
    const promptLine = `<div><span class="prompt">taoufik@terminal:~$</span> <span>${escapeHtml(cmd)}</span></div>`;
    appendTerminalOutput(promptLine);

    let output = '';

    switch (cleanCmd) {
      case 'help':
        output = `
<div style="color: var(--cyber-cyan);"><strong>COMMANDES DISPONIBLES :</strong></div>
  <span style="color: var(--cyber-green);">whoami</span>    : Profil & formation EMSI
  <span style="color: var(--cyber-green);">skills</span>    : Compétences (Cybersécurité, Infra, Web)
  <span style="color: var(--cyber-green);">projects</span>  : Liste des projets réalisés
  <span style="color: var(--cyber-green);">certs</span>     : Les 11 certifications officielles
  <span style="color: var(--cyber-green);">contact</span>   : Coordonnées directes
  <span style="color: var(--cyber-green);">clear</span>     : Effacer l'écran
`;
        break;

      case 'whoami':
        output = `
<div><strong>NOM :</strong> TAOUFIK HAMZA</div>
<div><strong>SPÉCIALITÉ :</strong> Élève Ingénieur en Informatique et Réseaux — Option Cybersécurité, Infrastructures et Réseaux</div>
<div><strong>ÉCOLE :</strong> École Marocaine des Sciences de l'Ingénieur (EMSI Casablanca)</div>
<div><strong>LOCALISATION :</strong> Berrechid / Casablanca, Maroc</div>
`;
        break;

      case 'skills':
        output = `
<div style="color: var(--cyber-cyan);"><strong>[+] COMPÉTENCES :</strong></div>
<div>🛡️ <strong>Cybersécurité :</strong> Wazuh SIEM, Burp Suite, Nmap, Wireshark, pfSense, OWASP, MITRE ATT&CK</div>
<div>🌐 <strong>Infrastructures :</strong> Linux (Kali, Ubuntu), VMware, Docker, Active Directory</div>
<div>💻 <strong>Programmation :</strong> Python, C++, Java, Solidity, JavaScript (React.js), PHP (Laravel, Symfony), Django</div>
`;
        break;

      case 'projects':
        output = `
<div style="color: var(--cyber-cyan);"><strong>[+] PROJETS :</strong></div>
<div>1. Tableau de bord SIEM / SOC (Wazuh, pfSense, VMware)</div>
<div>2. Analyse & Détection SOC Blue Team (MITRE ATT&CK)</div>
<div>3. dApp Médicale Blockchain Ethereum (Solidity, React.js)</div>
<div>4. Application E-Livraison Web (Django, MySQL)</div>
`;
        break;

      case 'certs':
        output = `
<div style="color: var(--cyber-cyan);"><strong>[+] CERTIFICATIONS OFFICIELLES (11) :</strong></div>
<div>• Google: Foundations of Cybersecurity & Agile Project Management</div>
<div>• LearnQuest: Fundamentals of Blockchain Architecture</div>
<div>• EPFL: Program. Orientée Objet C++</div>
<div>• Meta: React Basics & React Native</div>
<div>• Univ. Michigan: Python Access Web Data & Interactivité JS</div>
<div>• Johns Hopkins: L'atelier Unix</div>
`;
        break;

      case 'contact':
        output = `
<div>📧 <strong>Email :</strong> hamza.taoufik.pro@gmail.com</div>
<div>📞 <strong>Téléphone :</strong> +212 717071596</div>
<div>🔗 <strong>GitHub :</strong> https://github.com/taoufikhamza</div>
<div>💼 <strong>LinkedIn :</strong> https://www.linkedin.com/in/taoufikhamza/</div>
`;
        break;

      case 'clear':
        terminalBody.innerHTML = '';
        return;

      default:
        output = `
<div style="color: #ff5f56;">Commande non reconnue: '${escapeHtml(cmd)}'. Taper <span style="color: var(--cyber-green);">'help'</span>.</div>
`;
        break;
    }

    appendTerminalOutput(output);
  }

  function appendTerminalOutput(htmlContent) {
    const div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = htmlContent;
    terminalBody.appendChild(div);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
});
