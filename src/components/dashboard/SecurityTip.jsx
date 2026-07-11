import Card from "../ui/Card";

function SecurityTip() {
  return (
    <Card>
      <h2 className="text-lg font-semibold">Security Tip of the Day</h2>

      <p className="mt-4 text-slate-600">
        Never click links in emails claiming urgent account suspension or
        account verification requests.
      </p>
    </Card>
  );
}

export default SecurityTip;
