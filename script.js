/*Dados Primitivos:
    string: 'texto';
    number: 1234567890;
    boolean: true and false;

    variáveis: let ou const;

*/

/*const user = {
  name: 'Lucas',
  phone: '1234567890',
  accept: true
}*/

const links = {
  github: 'lucas-baron',
  instagram: 'olucas.baron',
  facebook: 'lucas.baron.7564'
}

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeLinks()
