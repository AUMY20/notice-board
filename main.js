nosex = 0;
    nosey = 0;
    lwristx = 0;
    lwristy = 0;
    rwristx = 0;
    rwristy = 0;
    text = document.getElementById("text");
function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500);
    canvas.position(680,160);
    poseNet = ml5.poseNet(video,modelLoded);
    poseNet.on('poses',gotPoses);

}

function modelLoded()
{
    console.log("Why did you open ME!");

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log( results);
    }

    console.log( results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex,nosey);

        lwristx = results[0].pose.leftWrist.x;
        lwristy = results[0].pose.leftWrist.y;
        console.log(lwristx,lwristy);

        rwristx = results[0].pose.rightWrist.x;
        rwristy = results[0].pose.rightWrist.y;
        console.log(rwristx,rwristy);

        difference = Math.floor(lwristx - rwristx);
}

function draw()
{
    background('gray');
    textsize(difference);
    fill('white');
    text(text,20,20);
}