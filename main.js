
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LpNB1iCOc/model.json',modelready)
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="i can hear "+results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2);
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img1=document.getElementById("cat");
        img2=document.getElementById("dog");
        img3=document.getElementById("cow");
        if(results[0].label=="clap"){
            img1.src="https://i0.wp.com/dianaurban.com/wp-content/uploads/2017/07/16-cat-disappearing.gif?resize=450%2C272&ssl=1.gif";
            img2.src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
            img3.src="https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg";
        }
        else if(results[0].label=="snapping"){
            img1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg";
            img2.src="https://media0.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif?cid=790b7611gno5r9t5l1f5cqvewh907bt6uuqd762p4lku8ti5&ep=v1_gifs_search&rid=giphy.gif&ct=g";
            img3.src="https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg";
        }
        else if(results[0].label=="tapping"){
            img1.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg";
            img2.src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
            img3.src="https://media2.giphy.com/media/LlK6rTQ1nvOs8Gfp8k/giphy.gif";
        }
    }
}