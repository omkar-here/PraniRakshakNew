import { useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import React from 'react';
import sendEmail from '../../Email';
import emailjs from '@emailjs/browser'

  
      // emailjs.send('service_733qcbg','template_xl6nmur','form_data','zWK7zkN8BO8E6tG-X')
    
  
  
const detectFrame = async (model, labels, videoRef, resultRef) => {
    try {
        const batched = tf.tidy(() => {
            const img = tf.browser.fromPixels(videoRef.current);
            const small = tf.image.resizeBilinear(img, [224, 224]).div(255);
            
            // Reshape to a single-element batch so we can pass it to executeAsync.
            return small.expandDims(0).toFloat();
        });
    
        const results = model.execute(batched);
    
        const scores = results.arraySync()[0];
    
        results.dispose();
        batched.dispose();
    
        const finalScores = scores.map((score, i) => ({
            label: labels[i],
            score: score
        }));
            
        finalScores.sort((a, b) => b.score - a.score);
        resultRef.current.innerHTML = finalScores[0].label + ' ' + finalScores[0].score
        const count=1;
        if(finalScores[0].label==='Tiger' || finalScores[0].label==='Lion'||finalScores[0].label==='Elephant'||finalScores[0].labelsel==='Bear'){
            if(count>0){
            console.log('Tigerr')
            var templateParams = {
                animals: finalScores[0].label
            };
             
            emailjs.send('service_733qcbg','template_xl6nmur', templateParams,'zWK7zkN8BO8E6tG-X')
                .then(function(response) {
                   console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                   console.log('FAILED...', error);
                });
            }
            count--;
        }
        requestAnimationFrame(() => {
            detectFrame(model, labels, videoRef, resultRef)
        })
    } catch(err) {}
}

const useVideoPrediction = (model, labels, videoRef, resultRef, shouldRender) => {
    useEffect(() => {
        if (model && labels && shouldRender) {
            detectFrame(model, labels, videoRef, resultRef)
        }
    }, [model, labels, shouldRender, videoRef, resultRef])
}

export default useVideoPrediction;