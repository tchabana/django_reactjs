from django.shortcuts import render, redirect
from contacts.models import Contact
from .forms import ContactForm

def index(request):
    contacts = Contact.objects.all()
    return render(request, 'contacts/index.html', {'contacts': contacts})


def contact_show(request,pk):
    contacts = Contact.objects.all()
    contact = Contact.objects.get(pk=pk)
    return render(request, 'contacts/show.html', {'contact': contact,'contacts':contacts})

def contact_create(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        contacts = Contact.objects.all()
        form = ContactForm()
    return render(request, 'contacts/create.html', {'form': form,'contacts': contacts})

def contact_update(request, pk):
    contact = Contact.objects.get(pk=pk)
    if request.method == 'POST':
        form = ContactForm(request.POST, instance=contact)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ContactForm(instance=contact)
        contacts = Contact.objects.all()
    return render(request, 'contacts/create.html', {'form': form,'contacts': contacts})

def contact_delete(request, pk):
    contact = Contact.objects.get(pk=pk)
    contact.delete()
    return redirect('index')