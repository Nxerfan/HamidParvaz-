const Form = document.getElementById('ProfileForm');
const Bar = document.getElementById('ProgressBar');

const Radius = Bar.r.baseVal.value;
const Circumference = Radius * 2 * Math.PI;

Bar.style.strokeDasharray = `${Circumference} ${Circumference}`;
Bar.style.strokeDashoffset = Circumference;

const SetProgress = Percent => {
    const Offset = Circumference - (Percent / 100) * Circumference;
    Bar.style.strokeDashoffset = Offset;
};

Form.addEventListener('input', () => {
    const Fields = Form.querySelectorAll('input[type="text"], select');
    let Filled = 0;

    Fields.forEach(f => {
        if (f.value && !['روز', 'ماه', 'سال'].includes(f.value)) Filled++;
    });

    SetProgress((Filled / Fields.length) * 100);
});

window.onload = () => Form.dispatchEvent(new Event('input'));