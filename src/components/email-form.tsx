import { useState, Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  Transition,
  DialogTitle,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { validateEmail } from "@/lib/validateEmail";

interface EmailFormProps {
  isOpen: boolean; // Define the type for isOpen
  onClose: () => void; // Define the type for onClose
}

export const EmailForm: React.FC<EmailFormProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(""); // Added state for subject
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    // Simulate sending email by writing to a JSON file
    const emailData = { email, subject, body };
    console.log(emailData);
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      setSuccess(true);
      setEmail("");
      setSubject(""); // Reset subject
      setBody("");
    } else {
      setError("Failed to send email.");
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute top-1 right-3 text-gray-500 hover:text-gray-700 text-2xl p-3"
                  onClick={onClose}
                >
                  &times;
                </button>
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                  style={{ fontFamily: "Halenoir" }} // Apply Halenoir font
                >
                  Send me an Email
                </DialogTitle>
                {success && (
                  <div className="text-green-500 mb-4">
                    Email sent successfully!
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      style={{ fontFamily: "Halenoir" }}
                    >
                      Your Email
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      style={{ fontFamily: "Halenoir" }}
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      style={{ fontFamily: "Halenoir" }}
                    >
                      Your Message
                    </label>
                    <Textarea
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-white text-black"
                      required
                    />
                  </div>
                  {error && <div className="text-red-500 mt-2">{error}</div>}

                  <div className="mt-4">
                    <Button
                      type="submit"
                      variant="default"
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      Send email
                    </Button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
