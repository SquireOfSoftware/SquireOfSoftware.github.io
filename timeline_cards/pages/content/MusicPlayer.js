import React, { useState } from "react";
import styles from '../../styles/MusicPlayer.module.css'
import pageStyle from "../../styles/Page.module.css";

export default function MusicPlayerPage(props) {
  return (
    <>
      <p>
        Imagine that you are hosting a party, you're busy eating cheetos and
        doritos with your friends when you are suddenly interrupted by your
        neighbour asking you to turn the music down. But how do you do that when
        your fingers are all grimed up with chip dust?
      </p>
      <p>
        You* can use a hand gesture trained neural network so that you can just
        control your music with a simple swipe of your hand. And so:
      </p>
      <p>
        Music too loud? Just lower your hand and the music will drop in volume
      </p>
      <p>
        Music too soft? Just raise your hand and the music will increase in
        volume
      </p>
      <p>
        Not a fan of the current song? Just swipe right and the music player
        will skip your song
      </p>
      <p>
        Previous song gave you chills? Just swipe left and the music player will
        replay your song
      </p>
      <p>
        <sup>* Besides using a digital assistant</sup>
      </p>
      <p>At least...that was the dream...</p>
      <p>
        What our 3 person group ended up producing was a neural network that
        would understand one of these four hand gestures 47.5% of the time
        (swiping right and down were the most understood gestures).
      </p>
      <h3 className={pageStyle.sticky_heading}>
        How did we set out to build this?
      </h3>
      <p>
        We first had to plan how we would architect the neural network. Given
        our limited knowledge in the topic, we opted for a Back Propagation
        design:
      </p>
      <img
        src="images/neural_net/Neural Network design.png"
        className={styles.image}
      />
      <p>
        From here, we would use some sort of device to capture as many hand
        gestures and motions of people moving their hands in a particular
        direction and then feed this data into the Neural Network to hopefully
        teach it how to understand each of these gestures.
      </p>
      <p>
        From here we mapped out the maths that we would need to get this system
        to start learning from the inputs that we were providing to the neural
        net:
      </p>
      <img
        src="images/neural_net/Neural Network implementation.png"
        className={styles.image}
      />
      <p>
        We had a bias at the front to increase the fit of the predication
        against the data better.
      </p>
      <p>
        We decided to run a bipolar sigmoidal function as our activation
        function...because...well we didn't know any better.
      </p>
      <p>
        And we only went 2 nodes deep, since this was our first neural network,
        we wanted to keep it simple.
      </p>
      <p>
        We also decided to split the dataset into the training set and the
        validation set. Where the training set is all the data that the neural
        network would see and conform itself against, whilst the validation set
        is all the data that the neural network has not seen yet and will be
        used to confirm that the network is learning the correct things.
      </p>
      <p>
        We would then proceed to run a training set through the network, measure
        its assessment against what the training set was classified as (so we
        would run a left swipe through the network, check the outputs and see
        how accurate it was to classification of the training set).
      </p>
      <p>
        To ensure that our network did not "over train" on the training data
        set, that is, to ensure that the network was actually learning and not
        just memorising the right values, we would periodically give the network
        a few entries from the validation dataset and see what the prediction is
        from the network at that given time.
      </p>
      <p>
        And how "wrong" the network would get the validation set would form our
        error rate per dataset "cycle".
      </p>
      <p>
        And if the verification "error" rate would start going up, it would be
        an indicator that our network was beginning to get over trained and we
        would have to stop the training process.
      </p>
      <h3 className={pageStyle.sticky_heading}>
        How did we implement this design?
      </h3>
      <p>
        We built this project in Matlab and we used a Leap Motion controller to
        capture our hand gestures.
      </p>
      <p>
        Once we got our development devices, we then started trying to capture
        hand gestures from all types of people and hand sizes. The more data
        that we could capture the more accurate our network would become because
        of all the varied ways that people could move their hands.
      </p>
      <p>Here is a sample hand gesture of a swipe left gesture.</p>
      <img src="images/neural_net/Sample Neural Network capture.gif" />
      <p>
        The Leap Motion controller could pick up all 5 fingers and we decided to
        make the sample 60 seconds of a hand performing the gesture (about 1
        sample per minute). This comes out to be about 300 data points per
        gesture and we would feed this directly into the network for it to
        learn.
      </p>
      <p>
        Probably the most difficult part was actually the capture, as it often
        took upwards of 45 minutes of just constantly recording of single person
        swiping hand gestures over and over again. We recorded about 1400 hand
        gestures across 6 different people.
      </p>
      <p>
        Of the 1400 recordings, we had about 300+ recording per hand gesture. We
        then split this up into 1000 gestures (which is 250 per gesture), 200
        validation recordings and 200+ for the final test gestures (gestures
        that the network has not seen or validated against before).
      </p>
      <p>
        The math though difficult (mainly in ensuring we had the right set up),
        was fairly easy to replicate and reset everything once you had the
        correct formulas established.
      </p>
      <h3 className={pageStyle.sticky_heading}>Our results</h3>
      <p>
        For our over trained network, we obtained 78% across all four gestures.
      </p>
      <img
        src="images/neural_net/Training results.png"
        className={styles.image}
      />
      <p>
        For our under trained network, we obtained 47.5% across all four
        gestures. But we really needed more data to make this network work.
      </p>
      <img
        src="images/neural_net/Training results 2.png"
        className={styles.image}
      />
      <h3 className={pageStyle.sticky_heading}>Lessons Learnt</h3>
      <img
        src="images/neural_net/Lessons learnt.png"
        className={styles.image}
      />
      <p>
        We played around with different neuron sizes to see how it would learn
        differently, we found that the larger the set of neurons on the second
        layer, the longer the training would require and the slower that the
        network would learn. So we settled for 35 neurons on the second layer to
        tradeoff between speed and accuracy.
      </p>
      <p>
        We also found that we could not put in the raw data into the network, we
        actually had to normalise it otherwise the math ended up neutralising a
        lot of the finer details in the gestures. So we had to shift all the
        data up by a certain offset so that they were above zero.
      </p>
      <p>
        We also found out (late in the training) that the Leap Motion Controller
        would sometimes screw up the identification of each of the fingers,
        resulting in fingers that would jump each other. We discovered this very
        late in the training process and probably contributed to the low
        identification rate.
      </p>
      <p>
        And we also found that we could have probably reduced the input space to
        speed up the training, we were tracking the fingers, but instead we
        could have tracked the palm and used that to record our data. So that
        would have just been 60 samples of the palm instead of the 300 for the 5
        fingers.
      </p>
      <img src="images/neural_net/Reflections.png" className={styles.image} />
      <p>
        For the full source code on how this worked and the resulting Neural Net
        that we had trained, you can go to this link{" "}
        <a
          href="https://github.com/SquireOfSoftware/NNFL/tree/master/Project"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </>
  );
}
