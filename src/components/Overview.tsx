import { useState } from "react";
import { Button } from "./Button/Button";
import { Checkbox } from "./Checkbox/Checkbox";
import { Groupbox } from "./Groupbox/Groupbox";
import { Input } from "./Input/Input";
import { Modal } from "./Modal/Modal";
import { PhoneInput } from "./PhoneInput/PhoneInput";
import { Pillbox } from "./Pillbox/Pillbox";

export function Overview() {
  const [isModalOpen, setIsMobalOpen] = useState<boolean>(false);

  return (
    <div>
      <Groupbox label="Groupbox" className="space-y-2">
        <div className="flex gap-2">
          <Button onClick={() => setIsMobalOpen(!isModalOpen)}>Button</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
        <Checkbox />
        <Input label="Input" placeholder="Input" />
        <PhoneInput label="Phone Number" />
        <Pillbox label="Pillbox" />
      </Groupbox>
      {isModalOpen && (
        <Modal>
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>This is modal example</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setIsMobalOpen(!isModalOpen)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
