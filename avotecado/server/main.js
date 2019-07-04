import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import Politicians from '/imports/api/politicians';

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }

  // If the Politicians collection is empty, add some data.
  if (Politicians.find().count() === 0) {
    Politicians.insert({
      'title': 'Mayor',
      'firstname': 'Kennedy',
      'lastname': 'Stewart',
      'party': 'Independent',
      'votes': 49705,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/mayor-kennedy-stewart.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '',
      'mobile': '',
      'email': '',
      'twitter': '@VanMayorsOffice',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Rebecca',
      'lastname': 'Bligh',
      'party': 'NPA',
      'votes': 44053,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/rebecca-bligh.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7249',
      'mobile': '',
      'email': 'CLRbligh@vancouver.ca',
      'twitter': '@rebeccaleebligh',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Christine',
      'lastname': 'Boyle',
      'party': 'OneCity',
      'votes': 45455,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/christine-boyle.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7242',
      'mobile': '',
      'email': 'CLRboyle@vancouver.ca',
      'twitter': '',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Adriane',
      'lastname': 'Carr',
      'party': 'Green',
      'votes': 69730,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/adriane-carr.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7245',
      'mobile': '',
      'email': 'CLRcarr@vancouver.ca',
      'twitter': '@AdrianeCarr',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Melissa',
      'lastname': 'De Genova',
      'party': 'NPA',
      'votes': 53251,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/melissa-degenova.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7244',
      'mobile': '',
      'email': 'CLRdegenova@vancouver.ca',
      'twitter': '@MelissaDeGenova',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Lisa',
      'lastname': 'Dominato',
      'party': 'NPA',
      'votes': 44689,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/lisa-dominato.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7248',
      'mobile': '604-754-7290',
      'email': 'CLRdominato@vancouver.ca',
      'twitter': '@LisaDominato',
      'website': '',
      'facebook': 'lisadominato',
      'linkedin': '',
      'instagram': '@lisadominato'
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Pete',
      'lastname': 'Fry',
      'party': 'Green',
      'votes': 61806,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/pete-fry.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7246',
      'mobile': '',
      'email': 'CLRfry@vancouver.ca',
      'twitter': '@PtFry',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Colleen',
      'lastname': 'Hardwick',
      'party': 'NPA',
      'votes': 47747,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/colleen-hardwick.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7240',
      'mobile': '',
      'email': 'CLRhardwick@vancouver.ca',
      'twitter': '@CllrHardwick',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Sarah',
      'lastname': 'Kirby-Yung',
      'party': 'NPA',
      'votes': 43581,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/sarah-kirby-yung.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7247',
      'mobile': '',
      'email': 'CLRkirby-yung@vancouver.ca',
      'twitter': '@sarahkirby_yung',
      'website': '',
      'facebook': 's.kirbyyung',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Jean',
      'lastname': 'Swanson',
      'party': 'COPE',
      'votes': 48865,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/jean-swanson.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7243',
      'mobile': '',
      'email': 'CLRswanson@vancouver.ca',
      'twitter': '',
      'website': '',
      'facebook': '',
      'linkedin': '',
      'instagram': ''
    });
    Politicians.insert({
      'title': 'City Councillor',
      'firstname': 'Michael',
      'lastname': 'Wiebe',
      'party': 'Green',
      'votes': 45593,
      'totalVotes': 176450,
      'profileURL': 'https://vancouver.ca/your-government/michael-wiebe.aspx',
      'address': '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      'phone': '604-873-7241',
      'mobile': '',
      'email': 'CLRwiebe@vancouver.ca',
      'twitter': '@councillorwiebe',
      'website': '',
      'facebook': 'councillorwiebe',
      'linkedin': '',
      'instagram': ''
    });
  }
});
