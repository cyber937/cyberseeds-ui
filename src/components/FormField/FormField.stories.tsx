import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "./FormField";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { Select, SelectOption } from "../Select/Select";
import { GroupBox } from "../GroupBox/GroupBox";

const meta: Meta<typeof FormField> = {
  component: FormField,
  title: "Form/FormField",
  tags: ["autodocs"],
  argTypes: {
    scale: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    isInvalid: { control: "boolean" },
    isRequired: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    scale: "md",
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input type="email" placeholder="example@email.com" />
      <FormField.Help>有効なメールアドレスを入力してください</FormField.Help>
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    isInvalid: true,
    isRequired: true,
  },
  render: (args) => (
    <FormField {...args}>
      <FormField.Label>ユーザー名</FormField.Label>
      <Input placeholder="ユーザー名を入力" />
      <FormField.Error>ユーザー名は必須です</FormField.Error>
    </FormField>
  ),
};

export const WithHelp: Story = {
  render: () => (
    <FormField>
      <FormField.Label>パスワード</FormField.Label>
      <Input type="password" placeholder="パスワードを入力" />
      <FormField.Help>8文字以上で、英数字を含めてください</FormField.Help>
    </FormField>
  ),
};

export const Required: Story = {
  render: () => (
    <FormField isRequired>
      <FormField.Label>名前</FormField.Label>
      <Input placeholder="名前を入力" />
    </FormField>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormField isDisabled>
      <FormField.Label>メールアドレス</FormField.Label>
      <Input placeholder="変更できません" />
      <FormField.Help>このフィールドは無効です</FormField.Help>
    </FormField>
  ),
};

export const WithTextArea: Story = {
  render: () => (
    <FormField isRequired>
      <FormField.Label>コメント</FormField.Label>
      <TextArea placeholder="コメントを入力してください" rows={4} />
      <FormField.Help>最大500文字まで入力できます</FormField.Help>
    </FormField>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormField isRequired>
      <FormField.Label>カテゴリ</FormField.Label>
      <Select>
        <SelectOption label="選択してください" value="" />
        <SelectOption label="技術" value="tech" />
        <SelectOption label="デザイン" value="design" />
        <SelectOption label="マーケティング" value="marketing" />
      </Select>
    </FormField>
  ),
};

export const Scales: Story = {
  render: () => (
    <div className="cs:grid cs:grid-cols-1 cs:sm:grid-cols-2 cs:gap-4 cs:sm:gap-6">
      <GroupBox label="Extra Small (xs)">
        <FormField scale="xs" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Small (sm)">
        <FormField scale="sm" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Standard (md)">
        <FormField scale="md" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
      <GroupBox label="Large (lg)">
        <FormField scale="lg" isRequired>
          <FormField.Label>メールアドレス</FormField.Label>
          <Input type="email" placeholder="example@email.com" />
          <FormField.Help>有効なメールアドレスを入力</FormField.Help>
        </FormField>
      </GroupBox>
    </div>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <div className="cs:space-y-4 cs:max-w-md">
      <FormField isRequired>
        <FormField.Label>名前</FormField.Label>
        <Input placeholder="山田 太郎" />
      </FormField>

      <FormField isRequired isInvalid>
        <FormField.Label>メールアドレス</FormField.Label>
        <Input type="email" placeholder="example@email.com" />
        <FormField.Error>有効なメールアドレスを入力してください</FormField.Error>
      </FormField>

      <FormField isRequired>
        <FormField.Label>カテゴリ</FormField.Label>
        <Select>
          <SelectOption label="選択してください" value="" />
          <SelectOption label="お問い合わせ" value="inquiry" />
          <SelectOption label="フィードバック" value="feedback" />
          <SelectOption label="バグ報告" value="bug" />
        </Select>
      </FormField>

      <FormField>
        <FormField.Label>メッセージ</FormField.Label>
        <TextArea placeholder="メッセージを入力してください" rows={4} />
        <FormField.Help>最大1000文字まで入力できます</FormField.Help>
      </FormField>
    </div>
  ),
};
