let flag1 = true;
let flag2 = true;
let flag3 = true;

let count = 1;

setInterval(changeImage,5000);

function changeContent() {
  if (flag1) {  
    document.getElementById('intropara').innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus hic rem unde fugiat quam omnis eum ut sapiente ipsum nisi cumque, adipisci nulla, error enim tenetur quod vero fugit eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis consequuntur harum eligendi nihil, autem at doloremque eveniet accusantium reprehenderit alias fugiat, asperiores dicta blanditiis tempore, cumque amet! Numquam, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit molestias fuga ad, vitae distinctio harum iste eveniet similique, eos aspernatur maxime dignissimos ea illum exercitationem voluptas obcaecati necessitatibus aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, minus repellendus obcaecati animi veritatis quas. Voluptates modi dignissimos, esse, illo labore provident aliquam expedita eum accusantium nostrum perspiciatis reiciendis sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellat sit eligendi eveniet modi, dicta dolore esse officia et error hic quia, blanditiis harum, aut consectetur fuga provident fugiat! Voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae at necessitatibus earum id reiciendis repellat nemo atque nesciunt dolor? Quibusdam, aspernatur quia. Neque provident beatae deleniti exercitationem quaerat est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis mollitia dolore quaerat ex cupiditate in rem vitae accusantium inventore praesentium nemo, tenetur deleniti veniam porro dolo";
  } else {
    document.getElementById('intropara').innerHTML="This is a test paragraph";
  }
  flag1=!flag1;
}


function changeStyle() {
  if (flag2) {
    document.getElementById('intropara').style.fontFamily = 'Arial, Helvetica, sans-serif';
  } else {
    document.getElementById('intropara').style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
  }
  flag2=!flag2;
}

function changeImage() {
  let path="./images/dish"+count+".jpg"; 
  document.getElementById('introimage').src=path;
  count++;
  if (count>3) {
    count=1;
  }
}

function toggleContent() {
  if (flag3) {
    let para = document.createElement('p'); 
    para.innerHTML='This is a dynamic paragraph';
    para.id="dynamicpara";
  
    document.getElementById('dynamicdiv').appendChild(para);
  } else {
    document.getElementById('dynamicpara').remove()
  } 
  flag3=!flag3;  
}

function formValues(event) {
  event.preventDefault();
  let firstName = document.forms['myForm']['fname'].value;
  let lastName = document.forms['myForm']['lname'].value;
  console.log(firstName+" "+lastName);
}

function trackValues(event) {
  let value = event.target.value;
  console.log(value);
}








