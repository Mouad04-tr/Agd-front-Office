import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import Page1 from "../Step_pages/Step1/AdosserPack";
import Page2 from "../Step_pages/Step2/SelectionCompte";
import Page3 from "../Step_pages/Step3/SelectionCarte";
import Page4 from "../Step_pages/Step4/SelectionService";

interface StepInfo {
  message: string;
  completed: boolean; // Ajouter la propriété "completed" à chaque étape
}

const steps: StepInfo[] = [
  { message: "Adosser votre pack", completed: false },
  { message: "Sélectionner le type de compte", completed: false },
  { message: "Sélectionner votre carte", completed: false },
  { message: "Produits et services supplémentaires", completed: false },
];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };
  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handlePrevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  function redirectToLink() {
    window.location.href = "/verification-email";
  }


  return (
    <Box sx={{ width: "90%",
        marginLeft: "5%",
        marginRight: "5%"
    }}>
      <Stepper nonLinear activeStep={activeStep}>
  {steps.map((step, index) => (
    <Step key={index} completed={step.completed}>
      <StepButton
        color="inherit"
        onClick={handleStep(index)}
        disabled  // Désactive le clic sur le bouton
        sx={{
          height: "60px", // Ajustez la hauteur du bouton
          "& .MuiStepButton-label": {
            fontSize: "800px", // Ajustez la taille de la police
          },
        }}
      />
      <Typography
        variant="caption"
        color="text.secondary"
        
        sx={{ textAlign: "center"}}
      >
        {step.message}
      </Typography>
      {index < steps.length - 1 && (
        <div
          style={{
            width: index === activeStep ? "100%" : "0%",
            height: "2px",
            backgroundColor: index === activeStep ? "#2196F3" : "grey",
            transition: "width 0.5s",
            marginTop: "10px",
          }}
        />
      )}
    </Step>
  ))}
</Stepper>


      <div>
        {/* Affichez le contenu de la page correspondant à l'étape active */}
        {activeStep === 0 && <Page1 onNextStep={handleNextStep} />}
        {activeStep === 1 && <Page2 onNextStep={handleNextStep} onPrevStep={handlePrevStep}/>}
        {activeStep === 2 && <Page3 onNextStep={handleNextStep} onPrevStep={handlePrevStep}/>}
        {activeStep === 3 && <Page4 ToLink={redirectToLink} onPrevStep={handlePrevStep}/>}
     
      </div>
    </Box>
  );
}
