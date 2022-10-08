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
}
