import { Box, Stepper, Typography, Step, StepLabel, Button } from "@mui/material";
import { CreateArticle } from "presentation/components/CreateArticle/CreateArticle";
import { CreateQuizz } from "presentation/components/CreateQuizz/CreateQuizz";
import { useState, Fragment, ReactNode } from "react";

const steps = ['Criar artigo', 'Criar quizz'];

export const CreateArticleContentView = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("Você não pode pular uma etapa obrigatória");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box sx={{ width: '80%', mt: 2, mx: 20 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption" color="secondary">Opcional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>
                                <Typography color="secondary">
                                    {label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }} color="secondary">
                        Artigo finalizado deseja publicá-lo?
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reiniciar</Button>
                    </Box>
                </Fragment>
            ) : (
                <Fragment>
                    {
                        activeStep === 0 ? (
                            <CreateArticle />
                        ) : (
                            <CreateQuizz />
                        )
                    }
                    <Typography sx={{ mt: 2, mb: 1 }}>Etapa {activeStep + 1}/2</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Voltar
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Pular
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finalizar artigo' : 'Próximo'}
                        </Button>
                    </Box>
                </Fragment>
            )}
        </Box>
    )
}