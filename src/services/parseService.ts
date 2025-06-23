export function parseResponse(response: string) {
  // Simple parser — improve as needed
  const strengths = response.match(/(?<=Strengths:)([\s\S]*?)(?=(Issues|Suggestions|$))/i)?.[0].trim().split('\n').filter(l => l.trim());
  const issues = response.match(/(?<=Issues:)([\s\S]*?)(?=(Suggestions|$))/i)?.[0].trim().split('\n').filter(l => l.trim());
  const suggestions = response.match(/(?<=Suggestions:)([\s\S]*)/i)?.[0].trim().split('\n').filter(l => l.trim());

  return {
    strengths: strengths || [],
    issues: issues || [],
    suggestions: suggestions || []
  };
}
