Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()

{
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
}


console.log('ml5 version', ml5.version);

classifer=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TNMB_4Ze1/model.json',modelLoded);

function modelLoded() {
    console.log('modelLoded!')
}

function check()

{
    img = document.getElementById('caputured_image');
    classifer.classify(img, gotresult);
}

function gotresult(error, result) {
    if (error){
        console.error(error);
    } else {
        console.log(result);
    }

    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].cofidence.toFixed(3);
}

