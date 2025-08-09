

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  Box, 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  TextField, 
  Button, 
  Alert,
  Snackbar
} from "@mui/material";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactForm() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [errors, setErrors] = useState({});
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const validateForm = (data) => {
    try {
      formSchema.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      const newErrors = {};
      error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  async function onSubmit(values) {
    if (!validateForm(values)) {
      return;
    }

    // Simulate form submission
    console.log(values);
    
    // Here you would typically send the data to a server
    // e.g. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) });

    setSnackbarMessage("Thank you for reaching out. I'll get back to you soon.");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);

    form.reset();
    setErrors({});
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'background.default',
          border: '1px solid #334155',
          borderRadius: 2,
        }}
      >
        <CardHeader>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#3b82f6',
              fontSize: '1.25rem',
            }}
          >
            Send me a message
          </Typography>
        </CardHeader>
        <CardContent>
          <Box
            component="form"
            onSubmit={form.handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
          >
            <TextField
              label="Your Name"
              placeholder="John Doe"
              {...form.register("name")}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#334155',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3b82f6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3b82f6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'text.secondary',
                  '&.Mui-focused': {
                    color: '#3b82f6',
                  },
                },
              }}
            />
            
            <TextField
              label="Your Email"
              placeholder="john.doe@example.com"
              type="email"
              {...form.register("email")}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#334155',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3b82f6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3b82f6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'text.secondary',
                  '&.Mui-focused': {
                    color: '#3b82f6',
                  },
                },
              }}
            />
            
            <TextField
              label="Your Message"
              placeholder="Hi Vikram, I'd like to talk about..."
              multiline
              rows={5}
              {...form.register("message")}
              error={!!errors.message}
              helperText={errors.message}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#334155',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3b82f6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3b82f6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'text.secondary',
                  '&.Mui-focused': {
                    color: '#3b82f6',
                  },
                },
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={form.formState.isSubmitting}
              endIcon={<Send />}
              sx={{
                background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(135deg, #3b82f6, #f59e0b)',
                  transform: 'translateY(-1px)',
                },
                '&:disabled': {
                  background: 'rgba(59, 130, 246, 0.5)',
                },
              }}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </CardContent>
      </Card>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{
            backgroundColor: snackbarSeverity === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white',
            },
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
