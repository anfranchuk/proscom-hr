from datasets import load_dataset
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained('bert-base-cased')
dataset = load_dataset('imdb')
tokenized_dataset = dataset.map(lambda x: tokenizer(x['text'], truncation=True, padding='max_length'), batched=True)

from torch.utils.data import DataLoader

train_dataset = tokenized_dataset['train']
test_dataset = tokenized_dataset['test']
train_loader = DataLoader(train_dataset, shuffle=True, batch_size=8)
test_loader = DataLoader(test_dataset, batch_size=8)

from transformers import BertForSequenceClassification, AdamW

model = BertForSequenceClassification.from_pretrained('bert-base-cased')
optimizer = AdamW(model.parameters(), lr=1e-5)

for epoch in range(epochs):
    for batch in train_loader:
        outputs = model(**{k: v.to(model.device) for k, v in batch.items()})
        loss = outputs.loss
        loss.backward()
        optimizer.step()
    # evaluate model at the end of each epoch



question = "Кто девопс в Proscom HR?"
input_ids = tokenizer.encode(question, return_tensors='pt')
outputs = model.generate(input_ids, max_length=100, num_return_sequences=1)

answer = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(answer)