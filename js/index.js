console.log("this is CvScreener Tutorial");

// Array of objects which contains information about the candidates
const data = [
    {
        name : 'Jennifer Jhonson',
        age:20,
        city:'New York',
        language:'Javascript',
        Framework: 'AngularJs',
        image : 'https://randomuser.me/api/portraits/women/78.jpg',
    },
    {
        name : 'Michael Hensley',
        age:23,
        city:'California',
        language:'Javascript',
        Framework: 'MongoDb',
        image : 'https://randomuser.me/api/portraits/men/78.jpg',
    },
    {
        name : 'jasmine James',
        age:21,
        city:'Austria',
        language:'Javascript',
        Framework: 'NodeJs',
        image : 'https://randomuser.me/api/portraits/women/77.jpg',
    },
    {
        name : 'Natalia Robinson',
        age:19,
        city:'Paris',
        language:'Python',
        Framework: 'CherryPy',
        image : 'https://randomuser.me/api/portraits/women/76.jpg',
    },
    {
        name : 'John Kates',
        age:19,
        city:'London',
        language:'Kotlin',
        Framework: 'Django',
        image : 'https://randomuser.me/api/portraits/men/77.jpg',
    },
    {
        name : 'Abhinav',
        age:20,
        city:'India',
        language:'Javascript',
        Framework: 'Reactjs',
        image : 'https://randomuser.me/api/portraits/men/76.jpg',
    },
    {
        name : 'Leila',
        age:18,
        city:'New York',
        language:'HTML',
        Framework: 'AngularJs',
        image : 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    {
        name : 'Kristian',
        age:20,
        city:'Paris',
        language:'C++',
        Framework: 'None',
        image : 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
        name : 'Karen',
        age:19,
        city:'Austria',
        language:'C',
        Framework: 'Flask',
        image : 'https://randomuser.me/api/portraits/women/74.jpg',
    },
    {
        name : 'Kenzie',
        age:20,
        city:'Paris',
        language:'Javascript',
        Framework: 'React',
        image : 'https://randomuser.me/api/portraits/women/73.jpg',
    },
    {
        name : 'Marley',
        age:20,
        city:'London',
        language:'C++',
        Framework: 'None',
        image : 'https://randomuser.me/api/portraits/women/72.jpg',
    },
    {
        name : 'James',
        age:22,
        city:'Paris',
        language:'Java',
        Framework: 'Ember',
        image : 'https://randomuser.me/api/portraits/men/74.jpg',
    },
    {
        name : 'Kellen',
        age:29,
        city:'Paris',
        language:'CSS',
        Framework: 'PURE.CSS',
        image : 'https://randomuser.me/api/portraits/men/73.jpg',
    },
    {
        name : 'Christopher',
        age:24,
        city:'Paris',
        language:'Java',
        Framework: 'Next',
        image : 'https://randomuser.me/api/portraits/men/72.jpg',
    },
    {
        name : 'Jenny',
        age: 19,
        city:'London',
        language:'HTML & CSS',
        Framework: 'Susy',
        image : 'https://randomuser.me/api/portraits/women/71.jpg',
    },
    {
        name : 'Elijah',
        age:20,
        city:'Paris',
        language:'C++',
        Framework: 'None',
        image : 'https://randomuser.me/api/portraits/women/70.jpg',
    },
    {
        name : 'Cooper',
        age:22,
        city:'Paris',
        language:'PHP',
        Framework: '.Net',
        image : 'https://randomuser.me/api/portraits/men/71.jpg',
    },
    {
        name : 'Lincoln',
        age:20,
        city:'New York',
        language:'Python',
        Framework: 'web2py',
        image : 'https://randomuser.me/api/portraits/men/70.jpg',
    },
]

// CV iterator
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next:function(){
            return nextIndex<profiles.length?
            { value: profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}
const candidates = cvIterator(data);

nextCV(); 
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

function nextCV(){
const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">City: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.Framework}</li>
  </ul>`;
    }
    else{
        alert('End of Applications');
        window.location.reload();
    }
}