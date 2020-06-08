import React, { useEffect } from 'react';
import classes from "./Cockpit.css"

const cockpit = props => {

  // Add anywhere ~= to comoponent did update.
  useEffect(() => {
    console.log("[Cockput.js] useEffect")
    // Http request...
    // const timer = setTimeout(() => {
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000)

    // return an anonymous function...
    // Runs when useeffect run for last time.
    return () => {

      // clearTimeout(timer);
      console.log("[Cockput.js] clean up work useEffect")
    };

  }, [])  // [props.persons] Only run when the following are changed
  // [] Pass an empty to run once for first time.

  useEffect(() => {
    console.log("[Cockput.js] 2nd useEffect")

    // return an anonymous function...
    // Runs when useeffect run for last time.
    return () => {
      console.log("[Cockput.js] clean up work 2nd useEffect")
    };
  }) // No second arg, so will control.

  let assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // Clasees = ['red']
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // Clasees = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>

      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked} >
        Switch Name
            </button>
    </div>
  );
}

// Wrap functional components with memo to avoid re-rendering.
export default React.memo(cockpit);