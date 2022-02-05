/*https://teachablemachine.withgoogle.com/models/nGcLki1Uj/*/ 

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nGcLki1Uj/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}