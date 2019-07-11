import { Meteor } from 'meteor/meteor';
import Politicians from '/imports/api/Politicians';

// function insertLink(title, url) {
//   Politicians.insert({ title, url, createdAt: new Date() });
// }

Meteor.startup(() => {
  // If the Politicians collection is empty, add some data.
  if (Politicians.find().count() === 0) {
    Politicians.insert({
      _id: '-1',
      title: 'No Title',
      firstname: 'Test',
      lastname: 'Politician',
      party: 'Test Party',
      votes: 11111,
      totalVotes: 11111,
      profileURL: 'https://google.com',
      address: '123 Fake Street',
      phone: '123-456-7890',
      mobile: '123-456-7890',
      email: 'test@test.com',
      twitter: '@test',
      website: 'test.com',
      facebook: '@test',
      linkedin: 'test',
      instagram: '@test'
    });
    Politicians.insert({
      _id: '0',
      title: 'Mayor',
      firstname: 'Kennedy',
      lastname: 'Stewart',
      party: 'Independent',
      votes: 49705,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/mayor-kennedy-stewart.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '',
      mobile: '',
      email: '',
      twitter: '@VanMayorsOffice',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '1',
      title: 'City Councillor',
      firstname: 'Rebecca',
      lastname: 'Bligh',
      party: 'NPA',
      votes: 44053,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/rebecca-bligh.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7249',
      mobile: '',
      email: 'CLRbligh@vancouver.ca',
      twitter: '@rebeccaleebligh',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '2',
      title: 'City Councillor',
      firstname: 'Christine',
      lastname: 'Boyle',
      party: 'OneCity',
      votes: 45455,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/christine-boyle.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7242',
      mobile: '',
      email: 'CLRboyle@vancouver.ca',
      twitter: '',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '3',
      title: 'City Councillor',
      firstname: 'Adriane',
      lastname: 'Carr',
      party: 'Green',
      votes: 69730,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/adriane-carr.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7245',
      mobile: '',
      email: 'CLRcarr@vancouver.ca',
      twitter: '@AdrianeCarr',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '4',
      title: 'City Councillor',
      firstname: 'Melissa',
      lastname: 'De Genova',
      party: 'NPA',
      votes: 53251,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/melissa-degenova.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7244',
      mobile: '',
      email: 'CLRdegenova@vancouver.ca',
      twitter: '@MelissaDeGenova',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '5',
      title: 'City Councillor',
      firstname: 'Lisa',
      lastname: 'Dominato',
      party: 'NPA',
      votes: 44689,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/lisa-dominato.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7248',
      mobile: '604-754-7290',
      email: 'CLRdominato@vancouver.ca',
      twitter: '@LisaDominato',
      website: '',
      facebook: 'lisadominato',
      linkedin: '',
      instagram: '@lisadominato'
    });
    Politicians.insert({
      _id: '6',
      title: 'City Councillor',
      firstname: 'Pete',
      lastname: 'Fry',
      party: 'Green',
      votes: 61806,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/pete-fry.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7246',
      mobile: '',
      email: 'CLRfry@vancouver.ca',
      twitter: '@PtFry',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '7',
      title: 'City Councillor',
      firstname: 'Colleen',
      lastname: 'Hardwick',
      party: 'NPA',
      votes: 47747,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/colleen-hardwick.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7240',
      mobile: '',
      email: 'CLRhardwick@vancouver.ca',
      twitter: '@CllrHardwick',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '8',
      title: 'City Councillor',
      firstname: 'Sarah',
      lastname: 'Kirby-Yung',
      party: 'NPA',
      votes: 43581,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/sarah-kirby-yung.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7247',
      mobile: '',
      email: 'CLRkirby-yung@vancouver.ca',
      twitter: '@sarahkirby_yung',
      website: '',
      facebook: 's.kirbyyung',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '9',
      title: 'City Councillor',
      firstname: 'Jean',
      lastname: 'Swanson',
      party: 'COPE',
      votes: 48865,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/jean-swanson.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7243',
      mobile: '',
      email: 'CLRswanson@vancouver.ca',
      twitter: '',
      website: '',
      facebook: '',
      linkedin: '',
      instagram: ''
    });
    Politicians.insert({
      _id: '10',
      title: 'City Councillor',
      firstname: 'Michael',
      lastname: 'Wiebe',
      party: 'Green',
      votes: 45593,
      totalVotes: 176450,
      profileURL: 'https://vancouver.ca/your-government/michael-wiebe.aspx',
      address: '3rd Floor, City Hall, 453 West 12th Ave, Vancouver, BC V5Y 1V4',
      phone: '604-873-7241',
      mobile: '',
      email: 'CLRwiebe@vancouver.ca',
      twitter: '@councillorwiebe',
      website: '',
      facebook: 'councillorwiebe',
      linkedin: '',
      instagram: ''
    });
  }

  Meteor.publish('Politicians', function () { console.log('publishing Politicians'); return Politicians.find(); });
  // Meteor.publish('SpotlightPolitician', function () { console.log('publishing SpotlightPolitician'); return Politicians.findOne(Math.floor(Math.random() * Politicians.find().count())); });
});
